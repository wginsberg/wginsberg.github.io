<?PHP
#-----------------------------------------------------------
#-----
#-----         Forms To Go v2.1.2   by   Bebosoft
#-----
#-----             http://www.bebosoft.com/
#-----
#-----------------------------------------------------------
#-----
#-----                UNREGISTERED COPY
#-----
#-----     Forms To Go is shareware. When you register it
#-----     you'll remove all registration reminders and
#-----     software restrictions. Thanks for your support
#-----
#-----------------------------------------------------------

# RegisterGlobals OFF

$First_Name = $_POST['First_Name'];
$Middle_Name = $_POST['Middle_Name'];
$Last_Name = $_POST['Last_Name'];
$dobday = $_POST['dobday'];
$dobmonth = $_POST['dobmonth'];
$dobyear = $_POST['dobyear'];
$Gender = $_POST['Gender'];
$House_No = $_POST['House_No'];
$Street = $_POST['Street'];
$Town = $_POST['Town'];
$City = $_POST['City'];
$State = $_POST['State'];
$Post_Code = $_POST['Post_Code'];
$Country = $_POST['Country'];
$Home_Tel = $_POST['Home_Tel'];
$Mobile_Tel = $_POST['Mobile_Tel'];
$Work_Tel = $_POST['Work_Tel'];
$Email = $_POST['Email'];
$CEmail = $_POST['CEmail'];
$Languages = $_POST['Languages'];
$sdday = $_POST['sdday'];
$sdmonth = $_POST['sdmonth'];
$sdyear = $_POST['sdyear'];
$CourseGroup = $_POST['CourseGroup'];
$CoursePrivate = $_POST['CoursePrivate'];
$Internet = $_POST['Internet'];
$spanishinaday = $_POST['spanishinaday'];
$CLEPCourse = $_POST['CLEPCourse'];
$Weeks = $_POST['Weeks'];
$Spanish_Level = $_POST['Spanish_Level'];
$Accommodation_Type = $_POST['Accommodation_Type'];
$accday = $_POST['accday'];
$accmonth = $_POST['accmonth'];
$accyear = $_POST['accyear'];
$accdayend = $_POST['accdayend'];
$accmonthend = $_POST['accmonthend'];
$accyearend = $_POST['accyearend'];
$arrival = $_POST['arrival'];
$Children = $_POST['Children'];
$Pets = $_POST['Pets'];
$Smoking = $_POST['Smoking'];
$Vegetarian = $_POST['Vegetarian'];
$Special_Food = $_POST['Special_Food'];
$Teuchitlan = $_POST['Teuchitlan'];
$Coocking = $_POST['Coocking'];
$Tequila = $_POST['Tequila'];
$MescalaIsland = $_POST['MescalaIsland'];
$Arts = $_POST['Arts'];
$Chapala = $_POST['Chapala'];
$volunteer = $_POST['volunteer'];
$Pickup = $_POST['Pickup'];
$dropof = $_POST['dropof'];
$airpday = $_POST['airpday'];
$airpmonth = $_POST['airpmonth'];
$airpyear = $_POST['airpyear'];
$Airline = $_POST['Airline'];
$Flight = $_POST['Flight'];
$From = $_POST['From'];
$message = $_POST['message'];
$Search = $_POST['Search'];
$Submit = $_POST['Submit'];



# Email Body

$email_header = "From: $Email\n"
 . "Reply-To: $Email\n";
$email_body = "First_Name: $First_Name\n"
 . "Middle_Name: $Middle_Name\n"
 . "Last_Name: $Last_Name\n"
 . "dobday: $dobday\n"
 . "dobmonth: $dobmonth\n"
 . "dobyear: $dobyear\n"
 . "Gender: $Gender\n"
 . "House_No: $House_No\n"
 . "Street: $Street\n"
 . "Town: $Town\n"
 . "City: $City\n"
 . "State: $State\n"
 . "Post_Code: $Post_Code\n"
 . "Country: $Country\n"
 . "Home_Tel: $Home_Tel\n"
 . "Mobile_Tel: $Mobile_Tel\n"
 . "Work_Tel: $Work_Tel\n"
 . "Email: $Email\n"
 . "CEmail: $CEmail\n"
 . "Languages: $Languages\n"
 . "sdday: $sdday\n"
 . "sdmonth: $sdmonth\n"
 . "sdyear: $sdyear\n"
 . "CourseGroup: $CourseGroup\n"
 . "CoursePrivate: $CoursePrivate\n"
 . "spanishinaday: $spanishinaday\n"
 . "CLEPCourse: $CLEPCourse\n"
 . "Group_Type: $Group_Type\n"
 . "Private_Type: $Private_Type\n"
 . "Weeks: $Weeks\n"
 . "Spanish_Level: $Spanish_Level\n"
 . "Accommodation_Type: $Accommodation_Type\n"
 . "Kitchen: $Kitchen\n"
 . "CableTV: $CableTV\n"
 . "Internet: $Internet\n"
 . "accday: $accday\n"
 . "accmonth: $accmonth\n"
 . "accyear: $accyear\n"
 . "accdayend: $accdayend\n"
 . "accmonthend: $accmonthend\n"
 . "accyearend: $accyearend\n"
 . "arrival: $arrival\n"
 . "Children: $Children\n"
 . "Pets: $Pets\n"
 . "Smoking: $Smoking\n"
 . "Vegetarian: $Vegetarian\n"
 . "Special_Food: $Special_Food\n"
 . "Teuchitlan: $Teuchitlan\n"
 . "Coocking: $Coocking\n"
 . "Tequila: $Tequila\n"
 . "Volcano: $Volcano\n"
 . "Turtle: $Turtle\n"
 . "Chapala: $Chapala\n"
 . "volunteer: $volunteer\n" 
 . "Pickup: $Pickup\n"
 . "dropof: $dropof\n" 
 . "airpday: $airpday\n"
 . "airpmonth: $airpmonth\n"
 . "airpyear: $airpyear\n"
 . "Airline: $Airline\n"
 . "Flight: $Flight\n"
 . "From: $From\n"
 . "message: $message\n"
 . "Search: $Search\n"
 . "Submit: $Submit\n"
 . "\n"
 . "";

# Send the email to the form owner

mail("application <application@glc.com.mx>", "application form ", $email_body, "$email_header");
# Dump field values to text file

# Redirect user to OK page

 header("Location: http://www.glc.com.mx/deposit.htm");
//echo "Thankyou $First_Name, you have successfully completed the application";
 exit;
# End of PHP script
?>