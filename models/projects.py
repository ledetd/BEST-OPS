from sqlmodel import Field, SQLModel
from datetime import date

class RegionBase(SQLModel):
    name: str = Field(index=True)
    position: str = Field(index=True)

class Region(RegionBase, table=True):
    id: int | None = Field(default=None, primary_key=True)

class RegionPublic(RegionBase):
    id: int

class RegionCreate(RegionBase):
    pass   

class RegionUpdate(RegionBase):
    name: str | None = None
    position: str | None = None
    
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


class WellBase(SQLModel):
    name: str = Field(index=True)

class Well(WellBase, table=True):
    id: int | None = Field(default=None, primary_key=True)

class WellPublic(WellBase):
    id: int

class WellCreate(WellBase):
    pass   

class WellUpdate(WellBase):
    pass


class ReportBase(SQLModel):
    report_date: date = Field(index=True)
    name: str = Field(index=True)
    status: str = Field(index=True)

class Report(ReportBase, table=True):
    id: int | None = Field(default=None, primary_key=True)

class ReportPublic(ReportBase):
    id: int

class ReportCreate(ReportBase):
    pass   

class ReportUpdate(ReportBase):
    name: str | None = None
    status: str | None = None


class LocationBase(SQLModel):
    name: str = Field(index=True)
   

class Location(LocationBase, table=True):
    id: int | None = Field(default=None, primary_key=True)

class LocationPublic(LocationBase):
    id: int

class LocationCreate(LocationBase):
    pass   

class LocationUpdate(LocationBase):
    name: str | None = None
    

class CrewBase(SQLModel):
    name: str = Field(index=True)
    position: str = Field(index=True)

class Crew(CrewBase, table=True):
    id: int | None = Field(default=None, primary_key=True)

class CrewPublic(CrewBase):
    id: int

class CrewCreate(CrewBase):
    pass   

class CrewUpdate(CrewBase):
    name: str | None = None
    position: str | None = None
