# User roles

User roles define the distinct categories of users who interact with the system.
Each role represents a specific set of permissions, responsibilities, and access
levels that determine what actions a user can perform within the app. Clearly
identifying user roles helps ensure that functional requirements, permissions,
and system behaviors are aligned with the needs and boundaries of each type of
user.

| ID   | Name      | Description                                                             | Example actions                                    |
| ---- | --------- | ----------------------------------------------------------------------- | -------------------------------------------------- |
| UR01 | User      | A regular user                                                          | View posts, post a post, sign up for an assignment |
| UR02 | SuperUser | A user who is paying for the monthly SuperUser plan                     | Add an assignment                                  |
| UR03 | Moderator | A user with elevated permissions that enforces rules throughout the app | Delete a post, suspend a user                      |
