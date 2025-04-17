from sqlmodel import Field, SQLModel
from typing import Annotated
from datetime import date

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
    


