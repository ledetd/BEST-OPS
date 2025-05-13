from sqlmodel import Field, SQLModel, Relationship
from datetime import date


    
class ProjectBase(SQLModel):
    name: str = Field(index=True)
    location: str = Field(index=True)
    customer: str = Field(index=True)
    project_manager: str | None = Field(default=None, index=True)

class Project(ProjectBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    wells: list["Well"] = Relationship(back_populates="project")

class ProjectPublic(ProjectBase):
    id: int

class ProjectCreate(ProjectBase):
    wells: list["WellBase"] | None = None

class ProjectUpdate(ProjectBase):
    pass


class WellBase(SQLModel):
    name: str = Field(index=True)
    project_id: int | None = Field(foreign_key="project.id")

class Well(WellBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    project: "Project" = Relationship(back_populates="wells")

class WellPublic(WellBase):
    id: int

class WellCreate(WellBase):
    pass   

class WellUpdate(WellBase):
    pass


