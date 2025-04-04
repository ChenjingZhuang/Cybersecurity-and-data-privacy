# Phase 3 - Authorization Testing Report

## Authorization Table

| Page / Feature           | Guest | Reserver | Administrator |
|--------------------------|:-----:|:--------:|:--------------:|
| `/` (index)              |       |          |                |
| └─ View resource form    | ❌    | ✅        | ✅ *note added* |
| └─ Create new resource   | ❌ *1 | ❌ *2     | ✅ *3          |

### Symbols used:
- ✅ Pass (a note can be added)  
- ❌ Fail (a note can be added)  
- ⚠️ Attention (a note can be added)

### Notes:
- *1 Add some note to this.*
- *2 Add some note to this.*
- *3 Add some note to this.*

---

## Testing Techniques

### ✅ 1. Browser Testing

- Create users with different roles
- Make reserveable resources
- Make reservations
- Test navigation and permissions
- Add notes to the table as you go

---

### ✅ 2. ZAP Testing

- Run ZAP and scan the application
- Record all alerts and issues
- Add any new discovered pages to the table
- Save the report in Markdown format

```bash
# Example ZAP markdown export (if using command line scripts or UI)
