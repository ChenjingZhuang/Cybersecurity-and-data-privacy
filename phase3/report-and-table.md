# Phase 3 - Authorization Testing Report

## Authorization Table
# ✅ Access Control Table – Final Version


| Page / Feature                                 | Guest | Reserver | Administrator |
|------------------------------------------------|:-----:|:--------:|:-------------:|
| `/` (index)                                    |  ✅   |   ✅     |      ✅       |
| └─ View resource form                          |  ❌   |   ✅     |      ✅       |
| └─ Create new resource                         |  ❌ *1|  ❌ *2   |     ✅ *3     |
| └─ View resource form    | ❌    | ✅       | ✅            |
| └─ Make a reservation    | ❌    | ✅       | ✅            |
| └─ View all reservations | ❌    | ✅       | ✅            |
| └─ Edit a reservation    | ❌    | ✅ only can edit the one that reserver made      | ✅  can do all to the whole reserveration     |
| └─ Delete a reservation  | ❌    | ❌ didnot see the cancel button      | ❌    didnot see the cancel button        |
| `/login`                                       |  ❌   |   ✅     |      ✅       |
| `/logout`                                      |  ❌  |   ✅     |      ✅       |
| `/register`                                    |  ✅   |   ✅     |      ✅       |
| `/api/resources`                               |  ✅   |   ✅     |      ✅       |
| `/api/session`                                 |  ❌   |   ✅     |      ✅       |
| `/api/users`                                   |  ❌   |   ✅     |      ✅       |
| `/api/reservations/2`                          |  ❌   | ✅     |     ✅    |
| `/api/reservations/5`                          |  ❌   | ✅    |     ✅     |

---

### ✅ Symbols Used

- ✅ Pass (access granted, working as intended)
- ❌ Fail (access denied or forbidden)
- ⚠️ Attention (requires manual verification or has caveats)

---
## Testing Techniques

### ✅ 1. Browser Testing

### Notes:
1. **Create new resource:** Guests cannot create new resources.
2. **Create new resource:** Reservers and Administrators can create new resources.
3. **Create new resource:** Administrators and Reservers can create new resources.
4. **View resource form:** Administrators and Reservers can see.
5. **Make a reservation:** Guests cannot make a reservation, only Reservers and Administrators can do so.
6. **View all reservations:** Guests cannot view reservations. Only Reservers and Administrators can view and manage reservations.
7. **Edit a reservation:** Only Administrators have permission to edit all reservations. Reservers only can edit the one they resevered.
8. **Delete a reservation:** didnot see a cancel button.
![Screenshot](https://github.com/ChenjingZhuang/Cybersecurity-and-data-privacy/blob/main/phase3/Screenshot%202025-04-04%20at%2023.17.31.png)
![Screenshot](https://github.com/ChenjingZhuang/Cybersecurity-and-data-privacy/blob/main/phase3/Screenshot%202025-04-04%20at%2023.18.36.png)


### Testing Steps: 


### ✅ 2. ZAP Testing
## ZAPROXY
## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- |
| Authentication Request Identified | Informational | 1 |
| Session Management Response Identified | Informational | 2 |
| User Agent Fuzzer | Informational | 24 |

##ZAP markdown export in other page.

### Testing Steps: 


### ✅ 3. Third testing technique: wfuzz and http

## Fuzz Testing Results

### 1. Pages Found Using Common Words (`wfuzz -c -w /usr/share/wordlists/dirb/common.txt --hc 404 http://localhost:8000/FUZZ`)
- **Found Pages:**
  - `/` - Status: 200 (Home page)
  - `/login` - Status: 200 (Login page)
  - `/logout` - Status: 302 (Redirect)
  - `/register` - Status: 200 (Registration page)
  - `/resources` - Status: 200 (Resources listing page)

### 2. Pages in the `api` Folder (`wfuzz -c -w /usr/share/wordlists/dirb/common.txt --hc 404 http://localhost:8000/api/FUZZ`)
- **Found Pages:**
  - `/api/resources` - Status: 200 (API endpoint for resources)
  - `/api/users` - Status: 200 (API endpoint for users)
  - `/api/session` - Status: 401 (Authentication required)

### 3. Pages in the `reservations` Folder (`wfuzz -c -z range,1-1000 --hc 404 http://localhost:8000/api/reservations/FUZZ`)
- **Found Pages:**
  - `/api/reservations/2` - Status: 200 (Reservation page)
  - `/api/reservations/5` - Status: 200 (Reservation page)

### 4. Content of Reservation Page (`http http://localhost:8000/api/reservations/2`)
- **Response:**
  - **Status:** 200 OK
  - **Content-Type:** application/json
  - **Data:**
    ```json
    {
    "reservation_end": "2025-04-07T09:07:00.000Z",
    "reservation_id": 2,
    "reservation_start": "2025-04-07T07:09:00.000Z",
    "reserver_token": "b985e3e2-ec91-4500-afca-8fa1b6b34dc8",
    "resource_id": 1
    }
    ```
    - Reservation ID: 2
    - Reservation Start: 2025-04-07T07:09:00.000Z
    - Reservation End: 2025-04-07T09:07:00.000Z
    - Reserver Token: a985e3e2-ec91-4500-afca-8fa1b6b34dc8
    - Resource ID: 1

### Summary:
- **Fuzz Test Results:**
  - The most common pages found were login, register, resources, and API endpoints (`/api/resources`, `/api/users`).
  - Specific reservation pages like `/api/reservations/2` and `/api/reservations/5` are accessible, with each page containing reservation details.



