# Phase 3 - Authorization Testing Report

## Authorization Table
| Page / Feature           | Guest | Reserver | Administrator |
|--------------------------|:-----:|:--------:|:-------------:|
| / (index)                | ✅    | ✅       | ✅            |
| └─ Create users with different roles    |  ✅   | ✅       | ✅            |
| └─ View resource form    | ❌    | ✅       | ✅            |
| └─ Create new resource   | ❌    | ✅       | ✅            |
| └─ Make a reservation    | ❌    | ✅       | ✅            |
| └─ View all reservations | ❌    | ✅       | ✅            |
| └─ Edit a reservation    | ❌    | ✅ only can edit the one that reserver made      | ✅  can do all to the whole reserveration     |
| └─ Delete a reservation  | ❌    | ❌ didnot see the cancel button      | ❌    didnot see the cancel button        |

# ✅ Access Control Table – Final Version

This table lists all discovered pages and their accessible features by role: Guest, Reserver, and Administrator. Notes below explain access logic and specification alignment.

| Page / Feature                                 | Guest | Reserver | Administrator |
|------------------------------------------------|:-----:|:--------:|:-------------:|
| `/` (index)                                    |  ✅   |   ✅     |      ✅       |
| └─ View resource form                          |  ❌   |   ✅     |      ✅       |
| └─ Create new resource                         |  ❌ *1|  ❌ *2   |     ✅ *3     |
| └─ View resource form    | ❌    | ✅       | ✅            |
| `/login`                                       |  ❌   |   ✅     |      ✅       |
| `/logout`                                      |  ❌  |   ✅     |      ✅       |
| `/register`                                    |  ✅   |   ✅     |      ✅       |
| └─ Make a reservation    | ❌    | ✅       | ✅            |
| └─ View all reservations | ❌    | ✅       | ✅            |
| └─ Edit a reservation    | ❌    | ✅ only can edit the one that reserver made      | ✅  can do all to the whole reserveration     |
| └─ Delete a reservation  | ❌    | ❌ didnot see the cancel button      | ❌    didnot see the cancel button        |
| `/api/resources`                               |  ✅   |   ✅     |      ✅       |
| `/api/session`                                 |  ❌   |   ✅     |      ✅       |
| `/api/users`                                   |  ❌   |   ✅     |      ✅       |
| `/api/reservations/2`                          |  ❌   | ✅ *4    |     ✅ *5     |
| `/api/reservations/5`                          |  ❌   | ✅ *4    |     ✅ *5     |

---

### ✅ Symbols Used

- ✅ Pass (access granted, working as intended)
- ❌ Fail (access denied or forbidden)
- ⚠️ Attention (requires manual verification or has caveats)

---

> ✅ This table now serves as a full audit of feature access across user roles.  
> 📤 You can now upload this file directly to your GitHub repo as your testing result documentation.



## ZAPROXY
## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- |
| Authentication Request Identified | Informational | 1 |
| Session Management Response Identified | Informational | 2 |
| User Agent Fuzzer | Informational | 24 |


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

### Testing Steps: 


### ✅ 2. ZAP Testing

- Run ZAP and scan the application
- Record all alerts and issues
- Add any new discovered pages to the table
- Save the report in Markdown format

```bash
# Example ZAP markdown export (if using command line scripts or UI)
