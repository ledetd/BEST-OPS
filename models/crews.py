from sqlmodel import Field, SQLModel

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

#TEST
    




