from sqlmodel import Field, SQLModel

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
    
