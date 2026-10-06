from __future__ import annotations

from pydantic import BaseModel, Field


class LeaveRequestBase(BaseModel):
    employee_name: str = Field(..., min_length=2, max_length=255)
    leave_type: str = Field(..., min_length=2, max_length=80)
    start_date: str = Field(..., min_length=8, max_length=12)
    end_date: str = Field(..., min_length=8, max_length=12)
    reason: str = Field(..., min_length=5, max_length=500)


class LeaveRequestCreate(LeaveRequestBase):
    pass


class LeaveRequestResponse(LeaveRequestBase):
    id: str
    status: str
