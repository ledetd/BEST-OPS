from sqlmodel import Field, SQLModel

class ReportBase(SQLModel):
    name: str = Field(index=True)
    location: str = Field(index=True)

class Report(ReportBase, table=True):
    id: int | None = Field(default=None, primary_key=True)

class ReportPublic(ReportBase):
    id: int

class ReportCreate(ReportBase):
    pass   

class ReportUpdate(ReportBase):
    name: str | None = None
    location: str | None = None
    


