from sqlmodel import Field, SQLModel

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
    
    




