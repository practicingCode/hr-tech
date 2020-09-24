# getting started
1. Start mongoDB
    db_name: CrudDB
    collections: 
        - users
        - employees
        - departments
        - organizations
        
2. Open backend folder
3. run "nodemon app.js"
       or 
   run "node app.js"
4. open frontend folder
   run ng serve
     localhost:4200/login     
  _________________________________
To see CRUD function, use POST MAN
 **Employees**  
 C - [POST] localhost:3000/employees  
     JSON is as follows:  
        {  
        "organizationName": "reSync",  
        "departmentName": "IT team",  
        "firstName": "lalalal",  
        "lastName": "TellTubby",   
        "DOB": "22/10/1780",  
        "workTitle": "Front End developer"  
        }  
 R - [GET] localhost:3000/employees  
   - [GET] localhost:3000/employees/id  
 U - [PUT] localhost:3000/employees/id  
     JSON is as follows:  
        {  
        "organizationName": "reSync",  
        "departmentName": "IT team",  
        "firstName": "lalalal",  
        "lastName": "TellTubby",  
        "DOB": "22/10/1780",  
        "workTitle": "Front End developer"  
        }  
 D - [DELETE] localhost:3000/employees/id  
   
 **Departments**  
  C - [POST] localhost:3000/departments  
     JSON is as follows:  
     {  
     "organizationName": "reSync",  
     "departmentName": "AI TEAM",  
     "description": "Make coputers smarter",  
     "workingTime": "10am-7pm",  
     "workingDays": "5 day week"  
	    }  
 R - [GET] localhost:3000/departments   
   - [GET] localhost:3000/departments/id  
 U - [PUT] localhost:3000/departments/id  
     JSON is as follows:  
     {  
     "organizationName": "reSync",  
     "departmentName": "AI TEAM",  
     "description": "Make coputers smarter",  
     "workingTime": "10am-7pm",  
     "workingDays": "5 day week"  
     }  
 D - [DELETE] localhost:3000/departments/id  
 
 
  *Organizations**  
  C - [POST] localhost:3000/organizations  
     JSON is as follows:  
     {    
        "organizationName": "reSync",  
        "owner": "Dr.Jay",  
        "address": "china town",  
        "city": "Singapore",  
        "state": "Singapore",  
        "country": "SG"   
	  }  
 R - [GET] localhost:3000/organizations  
   - [GET] localhost:3000/organizations/id  
 U - [PUT] localhost:3000/organizations/id  
     JSON is as follows:  
     {  
	"organizationName": "reSync",  
        "owner": "Dr.Jay",  
        "address": "china town",  
        "city": "Singapore",  
        "state": "Singapore",  
        "country": "SG"  
	  
    }  
 D - [DELETE] localhost:3000/organizations/id  
       
--------------------  
# Original Task   
---------------------   
# FullStack Test

Full-stack application development task. Front-End should be develop in Angular(version 9 or later), Back-End should be develop using Node-JS(Express.js), Database can be used either MySQL / MongoDB. Coding should be done using "camelCase" standard. Each function & business logic should have proper commenting. All information should be stored into the database. UI should be responsive for difference display like, large desktop, laptop, tablet, mobile screen.

**NOTE:** 
- Don't push the code in the master branch. Fork the branch and then start developing the codebase.
- Don't add node_modules directory
- create "backend" directory for Back-End codebase
- create "frontend" directory for Front-End codebase
- create "database" directory for datatabase file
- Nice to have feature - Docker & docker-compose.yml file [ Build and generate artifacts ]

**Problem Statement:**
Design and develop full-stack application which should have below functionality.

**Feature List**
1.  User can login using the login page [ email & password ]
2.  New user can register themselves using register page [ firstName, lastName, email, password, confirm password ]
3.  On successful login, user see home page.
    *  3.1 Sidebar with options like [ Home, Organization, Departments, Employees, Calender, logout ]
    *  3.2 Home page:
        *  Display tiles [ Total Organization, Total Departments, Total Employees ] under that user.
        *  Chart with x axis time and y axis organization, department & employees count when added. Chart will have two option 1M, 1Y selection.
        *  1M: How many organization, department and employees added in selected month
        *  1Y: How many organization, department and employees added in selected Year
	*  3.3 organization:
		*  There should be add organization button to add new organization
		*  Organization will have information like, organization name, owner, address, city, state, country
		*  List of existing organization detail should be displayed in tabular form with EDIT & DELETE Option.
		*  When Edit clicked:
			*  User should redirect to the organization edit page with the selected organization details to update the information.
		*  When Delete clicked:
			*  User should get pop-up to confirm the action.
			*  If user press YES, delete the organization, department under that organization as well as employees under that organization
	*  3.4 Departments:
		*  There should be add department button to add new department
		*  Department will have information like, drop-down menu of existing organization names, department owner, description, working time, working days.
		*  List of existing department detail should be displayed in tabular form with EDIT & DELETE Option.
		*  When Edit clicked:
			*  User should redirect to the department edit page with the selected department details to update the information. [ Organization cannot be changed ]
		*  When Delete clicked:
			*  User should get pop-up to confirm the action.
			*  If user press YES, delete the department, employees under that department
	*  3.5 Employees:
		*  There should be add employees button to add new employees
		*  Employees will have information like, drop-down menu of existing organization names, drop-down menu departments under that organization, firstName, lastName, dob, workTitle, totalExperience.
		*  List of existing employees detail should be displayed in tabular form with EDIT & DELETE Option.
		*  When Edit clicked:
			*  User should redirect to the employees edit page with the selected employees details to update the information. [ Organization cannot be changed but Department can be changed ]
		*  When Delete clicked:
			*  User should get pop-up to confirm the action.
			*  If user press YES, delete the employee record
	*  3.6 Calender:
		*  Calender should be displayed with the current month and current date selected.
	*  3.7 Logout:
		*  logout button should login user from the application












 



