from typing import Annotated

from fastapi import Depends, FastAPI, HTTPException, Query
from sqlmodel import Field, Session, SQLModel, create_engine, select
from models import Project, ProjectPublic, ProjectCreate, ProjectUpdate

sqlite_file_name = "best.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session


SessionDep = Annotated[Session, Depends(get_session)]

app = FastAPI()

@app.on_event("startup")
def on_startup():
    create_db_and_tables()

@app.get("/")
async def root():
    return {"BEST": "OPS Manager"}


@app.post("/projects/", response_model=ProjectPublic)
def create_project(project: ProjectCreate, session: SessionDep):
    db_project = Project.model_validate(project)
    session.add(db_project)
    session.commit()
    session.refresh(db_project)
    return db_project


@app.get("/projects/", response_model=list[ProjectPublic])
def read_projects(
    session: SessionDep,
    offset: int = 0,
    limit: Annotated[int, Query(le=100)] = 100,
):
    projects = session.exec(select(Project).offset(offset).limit(limit)).all()
    return projects


@app.get("/projects/{project_id}", response_model=ProjectPublic)
def read_project(project_id: int, session: SessionDep):
    project = session.get(Project, project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project


@app.patch("/projects/{project_id}", response_model=ProjectPublic)
def update_project(project_id: int, project: ProjectUpdate, session: SessionDep):
    project_db = session.get(Project, project_id)
    if not project_db:
        raise HTTPException(status_code=404, detail="Project not found")
    project_data = project.model_dump(exclude_unset=True)
    project_db.sqlmodel_update(project_data)
    session.add(project_db)
    session.commit()
    session.refresh(project_db)
    return project_db




#Run with - fastapi dev main.py