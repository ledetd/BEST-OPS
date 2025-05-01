from sqlmodel import Field, SQLModel
from .projects import ProjectBase

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
    
    