from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException, status

from app.core.auth import get_current_user

router = APIRouter(prefix="/leave", tags=["leave"])


@router.get("")
async def list_leave_requests(current_user=Depends(get_current_user)) -> list[dict[str, str]]:
    if "leave.read" not in current_user.permissions:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Insufficient permissions")

    return [
        {
            "id": "leave-001",
            "employee_name": "Muhammad Abubakar",
            "type": "Annual",
            "start_date": "2026-10-10",
            "end_date": "2026-10-12",
            "status": "Pending",
            "reason": "Family leave",
        },
        {
            "id": "leave-002",
            "employee_name": "Fatima Alhassan",
            "type": "Sick",
            "start_date": "2026-10-08",
            "end_date": "2026-10-09",
            "status": "Approved",
            "reason": "Medical checkup",
        },
    ]


@router.post("/request")
async def request_leave(current_user=Depends(get_current_user)) -> dict[str, str]:
    if "leave.write" not in current_user.permissions:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Insufficient permissions")

    return {
        "status": "requested",
        "employee": current_user.email or current_user.sub,
        "message": "Leave request submitted successfully.",
    }


@router.post("/{leave_id}/approve")
async def approve_leave(leave_id: str, current_user=Depends(get_current_user)) -> dict[str, str]:
    if "leave.write" not in current_user.permissions:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Insufficient permissions")

    return {
        "status": "approved",
        "leave_id": leave_id,
        "message": "Leave approved successfully.",
    }
