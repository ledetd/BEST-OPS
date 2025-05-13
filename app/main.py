from typing import Annotated
from datetime import date
from fastapi import Depends, FastAPI, HTTPException, Query, Path
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Field, Session, SQLModel, create_engine, select
from models.projects import Project, ProjectPublic, ProjectCreate, ProjectUpdate, Well, WellPublic, WellCreate, WellUpdate
from contextlib import asynccontextmanager
from db import init_db, get_session


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield

app = FastAPI(lifespan=lifespan)

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# @app.on_event("startup")
# def on_startup():
#     create_db_and_tables()

# @app.get("/")
# async def root():
#     return {"BEST": "OPS Manager"}

@app.post("/projects/")
async def create_project(project_data: ProjectCreate, session: Session = Depends(get_session)) -> Project:
    project = Project(name=project_data.name, location=project_data.location, customer=project_data.customer)
    session.add(project)

    if project_data.wells:
        for well in project_data.wells:
            well_obj = Well(name=well.name, project=project)
            session.add(well_obj)
    session.commit()
    session.refresh(project)
    return project



@app.get("/projects/")
async def read_projects(
    q: Annotated[str | None, Query(max_length=10)] = None,
    session: Session = Depends(get_session)) -> list[Project]:

    project_list = session.exec(select(Project)).all()
    return project_list


@app.get("/projects/{project_id}")
async def read_project(
    project_id: Annotated[int, Path(name="Project Name")],
    session: Session = Depends(get_session)) -> Project:
    project = session.get(Project, project_id)
    if project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

# @app.patch("/projects/{project_id}", response_model=ProjectPublic)
# def update_project(project_id: int, project: ProjectUpdate, session: Session):
#     project_db = session.get(Project, project_id)
#     if not project_db:
#         raise HTTPException(status_code=404, detail="Project not found")
#     project_data = project.model_dump(exclude_unset=True)
#     project_db.sqlmodel_update(project_data)
#     session.add(project_db)
#     session.commit()
#     session.refresh(project_db)
#     return project_db




@app.post("/wells/")
async def create_well(well_data: WellCreate, session: Session = Depends(get_session)) -> Well:
    well = Well(name=well_data.name)
    session.add(well)
    session.commit()
    session.refresh(well)
    return well

@app.get("/wells/")
async def read_wells(
    q: Annotated[str | None, Query(max_length=10)] = None,
    session: Session = Depends(get_session)) -> list[Well]:

    well_list = session.exec(select(Well)).all()
    return well_list


@app.get("/wells/{well_id}")
async def read_well(
    well_id: Annotated[int, Path(name="Well Name")],
    session: Session = Depends(get_session)) -> Well:
    well = session.get(Well, well_id)
    if well is None:
        raise HTTPException(status_code=404, detail="Well not found")
    return well

# @app.patch("/wells/{well_id}", response_model=WellPublic)
# def update_well(well_id: int, well: WellUpdate, session: Session):
#     well_db = session.get(Well, well_id)
#     if not well_db:
#         raise HTTPException(status_code=404, detail="Well not found")
#     well_data = well.model_dump(exclude_unset=True)
#     well_db.sqlmodel_update(well_data)
#     session.add(well_db)
#     session.commit()
#     session.refresh(well_db)
#     return well_db

# @app.post("/locations/", response_model=LocationPublic)
# def create_location(location: LocationCreate, session: Session):
#     db_location = Location.model_validate(location)
#     session.add(db_location)
#     session.commit()
#     session.refresh(db_location)
#     return db_location

# @app.get("/locations/", response_model=list[LocationPublic])
# def read_locations(
#     session: Session,
#     offset: int = 0,
#     limit: Annotated[int, Query(le=100)] = 100,
# ):
#     locations = session.exec(select(Location).offset(offset).limit(limit)).all()
#     return locations

# @app.get("/locations/{location_id}", response_model=LocationPublic)
# def read_location(location_id: int, session: Session):
#     location = session.get(Location, location_id)
#     if not location:
#         raise HTTPException(status_code=404, detail="Location not found")
#     return location

# @app.patch("/locations/{location_id}", response_model=LocationPublic)
# def update_location(location_id: int, location: LocationUpdate, session: Session):
#     location_db = session.get(Location, location_id)
#     if not location_db:
#         raise HTTPException(status_code=404, detail="Location not found")
#     location_data = location.model_dump(exclude_unset=True)
#     location_db.sqlmodel_update(location_data)
#     session.add(location_db)
#     session.commit()
#     session.refresh(location_db)
#     return location_db


# @app.post("/crews/", response_model=CrewPublic)
# def create_location(location: CrewCreate, session: Session):
#     db_location = Crew.model_validate(location)
#     session.add(db_location)
#     session.commit()
#     session.refresh(db_location)
#     return db_location


# @app.get("/crews/", response_model=list[CrewPublic])
# def read_crews(
#     session: Session,
#     offset: int = 0,
#     limit: Annotated[int, Query(le=100)] = 100,
# ):
#     crews = session.exec(select(Crew).offset(offset).limit(limit)).all()
#     return crews


# @app.get("/crews/{location_id}", response_model=CrewPublic)
# def read_location(location_id: int, session: Session):
#     location = session.get(Crew, location_id)
#     if not location:
#         raise HTTPException(status_code=404, detail="Crew not found")
#     return location


# @app.patch("/crews/{location_id}", response_model=CrewPublic)
# def update_location(location_id: int, location: CrewUpdate, session: Session):
#     location_db = session.get(Crew, location_id)
#     if not location_db:
#         raise HTTPException(status_code=404, detail="Crew not found")
#     location_data = location.model_dump(exclude_unset=True)
#     location_db.sqlmodel_update(location_data)
#     session.add(location_db)
#     session.commit()
#     session.refresh(location_db)
#     return location_db


# @app.post("/reports/", response_model=ReportPublic)
# def create_report(report: ReportCreate, session: Session):
#     db_report = Report.model_validate(report)
#     session.add(db_report)
#     session.commit()
#     session.refresh(db_report)
#     return db_report


# @app.get("/reports/", response_model=list[ReportPublic])
# def read_reports(
#     session: Session,
#     offset: int = 0,
#     limit: Annotated[int, Query(le=100)] = 100,
# ):
#     reports = session.exec(select(Report).offset(offset).limit(limit)).all()
#     return reports


# @app.get("/reports/{report_id}", response_model=ReportPublic)
# def read_report(report_id: int, session: Session):
#     report = session.get(Report, report_id)
#     if not report:
#         raise HTTPException(status_code=404, detail="Report not found")
#     return report


# @app.patch("/reports/{report_id}", response_model=ReportPublic)
# def update_report(report_id: int, report: ReportUpdate, session: Session):
#     report_db = session.get(Report, report_id)
#     if not report_db:
#         raise HTTPException(status_code=404, detail="Report not found")
#     report_data = report.model_dump(exclude_unset=True)
#     report_db.sqlmodel_update(report_data)
#     session.add(report_db)
#     session.commit()
#     session.refresh(report_db)
#     return report_db


#Run with - fastapi dev main.py