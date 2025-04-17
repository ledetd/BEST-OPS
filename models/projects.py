from sqlmodel import Field, SQLModel


class ProjectBase(SQLModel):
    name: str = Field(index=True)
    location: str = Field(index=True)
    customer: str = Field(index=True)
    project_manager: str | None = Field(index=True)

class Project(ProjectBase, table=True):
    id: int | None = Field(default=None, primary_key=True)

class ProjectPublic(ProjectBase):
    id: int

class ProjectCreate(ProjectBase):
    pass   
class ProjectUpdate(ProjectBase):
    name: str | None = None
    location: str | None = None
    project_manager: str | None = None

    