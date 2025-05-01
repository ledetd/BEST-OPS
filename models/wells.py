from sqlmodel import Field, SQLModel


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
    
    