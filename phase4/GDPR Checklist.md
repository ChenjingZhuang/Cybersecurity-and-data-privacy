# GDPR Compliance Checklist 

| **Result** | **Personal data mapping and minimization** |
| :----: | :--- |
| &nbsp;✅ | Have all personal data collected and processed in the system been<br> identified? (e.g., name, email, age, username) |
| &nbsp;✅ | Have you ensured that only necessary personal data is collected (data minimization)? |
| &nbsp;✅ | Is user age recorded to verify that the booker is over 15 years old? |

---

| **Result** | **User registration and management** |
| :----: | :--- |
| &nbsp;✅ | Does the registration form (page) include GDPR-compliant consent for processing<br> personal data (e.g., acceptance of the privacy policy)?|
| ❌ | Can users view, edit, and delete their own personal data via their account? |
| ⚠️&nbsp; can't see| Is there a mechanism for the administrator to delete a reserver in<br> accordance with the "right to be forgotten"? |
| ✅ | Is underage registration (under 15 years) and booking functionality restricted? |

---

| **Result** | **Booking visibility** |
| :----: | :--- |
| &nbsp;✅ | Are bookings visible to non-logged-in users only at the resource level<br> (without any personal data)? |
| &nbsp;✅ | Is it ensured that names, emails, or other personal data of bookers are not exposed<br> publicly or to unauthorized users? |

--- 

| **Result** | **Access control and authorization** |
| :----: | :--- |
| ⚠️&nbsp; | Have you ensured that only administrators can add, modify, and delete<br> resources and bookings? |
| &nbsp;✅ | Is the system using role-based access control (e.g., reserver vs. administrator)? |
| &nbsp;✅ | Are administrator privileges limited to ensure GDPR compliance (e.g., administrators<br> cannot use data for unauthorized purposes)? |

---

| **Result** | **Privacy by Design Principles** |
| :----: | :--- |
| &nbsp;✅| Has Privacy by Default been implemented (e.g., collecting the minimum data by default)? |
| &nbsp;✅ | Are logs implemented without unnecessarily storing personal data? |
| &nbsp;✅ | Are forms and system components designed with data protection in mind<br> (e.g., secured login, minimal fields)? |

---

| **Result** | **Data security** |
| :----: | :--- |
| &nbsp;✅/❌/⚠️&nbsp; | Are CSRF, XSS, and SQL injection protections implemented? |
| &nbsp;⚠️ only need 8 characters| Are passwords securely hashed using a strong algorithm (e.g., bcrypt, Argon2)? |
| &nbsp;⚠️ | Are data backup and recovery processes GDPR-compliant? |
| &nbsp;✅| Is personal data stored in data centers located within the EU? |

---

| **Result** | **Data anonymization and pseudonymization** |
| :----: | :--- |
| &nbsp;⚠️ can see email | Is personal data anonymized where possible? |
| &nbsp;⚠️  | Are pseudonymization techniques used to protect data while maintaining its utility? |

---

| **Result** | **Data subject rights** |
| :----: | :--- |
| &nbsp;❌ | Can users download or request all personal data related to them (data access request)? |
| &nbsp;❌ | Is there an interface or process for users to request the deletion of their personal data? |
| &nbsp;⚠️ | Can users withdraw their consent for data processing? |

---

| **Result** | **Documentation and communication** |
| :----: | :--- |
| &nbsp;❌ | Is there a privacy policy available to users during registration and easily accessible? |
| &nbsp;⚠️ | Are administrators and developers provided with documented data protection practices <br>and processing activities? |
| &nbsp;⚠️&nbsp; | Is there a documented data breach response process (e.g., how to notify authorities <br>and users of a breach)? |

---
**Symbols used:**  
✅ Pass (a note can be added)  
❌ Fail (a note can be added)  
⚠️ Attention (a note can be added)
