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

$name = $_POST['txtName'];
$email = $_POST['txtEmail'];
$score = $_POST['hiddScore'];

$a1 = $_POST['hiddA1'];
$a2 = $_POST['hiddA2'];
$a3 = $_POST['hiddA3'];
$a4 = $_POST['hiddA4'];
$a5 = $_POST['hiddA5'];
$a6 = $_POST['hiddA6'];
$a7 = $_POST['hiddA7'];
$a8 = $_POST['hiddA8'];
$a9 = $_POST['hiddA9'];
$a10 = $_POST['hiddA10'];
$a11 = $_POST['hiddA11'];
$a12 = $_POST['hiddA12'];
$a13 = $_POST['hiddA13'];
$a14 = $_POST['hiddA14'];
$a15 = $_POST['hiddA15'];

$b1 = $_POST['hiddB1'];
$b2 = $_POST['hiddB2'];
$b3 = $_POST['hiddB3'];
$b4 = $_POST['hiddB4'];
$b5 = $_POST['hiddB5'];
$b6 = $_POST['hiddB6'];
$b7 = $_POST['hiddB7'];
$b8 = $_POST['hiddB8'];
$b9 = $_POST['hiddB9'];
$b10 = $_POST['hiddB10'];
$b11 = $_POST['hiddB11'];
$b12 = $_POST['hiddB12'];
$b13 = $_POST['hiddB13'];
$b14 = $_POST['hiddB14'];
$b15 = $_POST['hiddB15'];

$c1 = $_POST['hiddC1'];
$c2 = $_POST['hiddC2'];
$c3 = $_POST['hiddC3'];
$c4 = $_POST['hiddC4'];
$c5 = $_POST['hiddC5'];
$c6 = $_POST['hiddC6'];
$c8 = $_POST['hiddC8'];
$c9 = $_POST['hiddC9'];
$c10 = $_POST['hiddC10'];
$c11 = $_POST['hiddC11'];

$c7a = $_POST['hiddC7a'];
$c7b = $_POST['hiddC7b'];
$c7c = $_POST['hiddC7c'];
$c7d = $_POST['hiddC7d'];
$c7e = $_POST['hiddC7e'];
$c7f = $_POST['hiddC7f'];
$c7g = $_POST['hiddC7g'];
$c7h = $_POST['hiddC7h'];

$d1 = $_POST['hiddD1'];
$d2 = $_POST['hiddD2'];
$d3 = $_POST['hiddD3'];
$d4 = $_POST['hiddD4'];
$d5 = $_POST['hiddD5'];
$d6 = $_POST['hiddD6'];
$d7 = $_POST['hiddD7'];
$d8 = $_POST['hiddD8'];
$d9 = $_POST['hiddD9'];
$d10 = $_POST['hiddD10'];
$d11 = $_POST['hiddD11'];
$d12 = $_POST['hiddD12'];
$d13 = $_POST['hiddD13'];
$d14 = $_POST['hiddD14'];
$d15 = $_POST['hiddD15'];

# Email Body

$email_header = "From: glc@glc.com.mx\r\n"
 . "Reply-To: glc@glc.com.mx\r\n"
 . "MIME-Version: 1.0\r\n"
 . "Content-Type: text/html; charset=ISO-8859-1\r\n";
$email_body = "<html><body><span>Dear $name,</span><br><br>"
 . "<span>We hereby send you your results of your Spanish level assessment test.</span><br><br>"
 . "<span>Total score: $score</span><br><br>"
 . "<span>Score overview</span><br><br>"
 . "<table border=1 cellspacing=2 cellpadding=0>"
 . "<tr><th><h6>Correct score</h6></th><th><h6>Level</h6></th><th><h6></h6></th></tr>"
 . "<tr><td><span>1-10</span></td><td><span>Beginner</span></td><td><span>0 - 18%</span></td></tr>"
 . "<tr><td><span>11-20</span></td><td><span>Basic</span></td><td><span>19 - 38%</span></td></tr>"
 . "<tr><td><span>21-30</span></td><td><span>Low intermediate</span></td><td><span>39 - 56%</span></td></tr>"
 . "<tr><td><span>31-40</span></td><td><span>Intermediate</span></td><td><span>57 - 74%</span></td></tr>"
 . "<tr><td><span>41-50</span></td><td><span>High intermediate</span></td><td><span>75 - 89%</span></td></tr>"
 . "<tr><td><span>51-60</span></td><td><span>Advanced</span></td><td><span>90 - 100%</span></td></tr>"
 . "</table><br>"
 . "<span>If you need any further information just write us an email or call us on our toll free number.</span><br><br>"
 . "<span>Toll free USA     1 866 275 5222</span><br><br>"
 . "<span>Best regards,</span><br><br>"
 . "<span>Wouter Stut</span><br>"
 . "<span>Operations Director</span><br><br>" 
 . "<span>Guadalajara Language Center</span><br>"
 . "<span>Fco. I. Madero 160 A</span><br>"
 . "<span>San Pedro Tlaquepaque</span><br><br>"
 . "<span>Phone +52 (33) 36352535</span><br>"
 . "<span>Email wstut@glc.com.mx</span><br>"
 . "<span>Website www.glc.com.mx</span><br>"
 . "</body></html>";

# Send the email to the form owner
mail($email, "Guadalajara Language Center - Level assessment test results", $email_body, "$email_header");

# 2nd Email Body

$email_header2 = "From: $email\n"
 . "Reply-To: glc@glc.com.mx\r\n";
$email_body2 = "user: $name,\n"
 . "e-mail: $email\n\n"
 . "Total score: $score\n\n"
 . "Answers:\n\n"
 . "Part A\n"
 . "A1: $a1\n"
 . "A2: $a2\n"
 . "A3: $a3\n"
 . "A4: $a4\n"
 . "A5: $a5\n"
 . "A6: $a6\n"
 . "A7: $a7\n"
 . "A8: $a8\n"
 . "A9: $a9\n"
 . "A10: $a10\n"
 . "A11: $a11\n"
 . "A12: $a12\n"
 . "A13: $a13\n"
 . "A14: $a14\n"
 . "A15: $a15\n\n"
 . "Part B\n"
 . "B1: $b1\n"
 . "B2: $b2\n"
 . "B3: $b3\n"
 . "B4: $b4\n"
 . "B5: $b5\n"
 . "B6: $b6\n"
 . "B7: $b7\n"
 . "B8: $b8\n"
 . "B9: $b9\n"
 . "B10: $b10\n"
 . "B11: $b11\n"
 . "B12: $b12\n"
 . "B13: $b13\n"
 . "B14: $b14\n"
 . "B15: $b15\n\n"
 . "Part C\n"
 . "C1: $c1\n"
 . "C2: $c2\n"
 . "C3: $c3\n"
 . "C4: $c4\n"
 . "C5: $c5\n"
 . "C6: $c6\n"
 . "C7a: $c7a\n"
 . "C7b: $c7b\n"
 . "C7c: $c7c\n"
 . "C7d: $c7d\n"
 . "C7e: $c7e\n"
 . "C7f: $c7f\n"
 . "C7g: $c7g\n"
 . "C7h: $c7h\n"
 . "C8: $c8\n"
 . "C9: $c9\n"
 . "C10: $c10\n"
 . "C11: $c11\n\n"
 . "Part D\n"
 . "D1: $d1\n"
 . "D2: $d2\n"
 . "D3: $d3\n"
 . "D4: $d4\n"
 . "D5: $d5\n"
 . "D6: $d6\n"
 . "D7: $d7\n"
 . "D8: $d8\n"
 . "D9: $d9\n"
 . "D10: $d10\n"
 . "D11: $d11\n"
 . "D12: $d12\n"
 . "D13: $d13\n"
 . "D14: $d14\n"
 . "D15: $d15\n"
 . "";

# Send the 2nd email to the form owner
mail("glc@glc.com.mx", "Guadalajara Language Center - Level assessment test results(user)", $email_body2, "$email_header2");

# Redirect user to OK page

 header("Location: http://www.glc.com.mx/mobile/success_assessment_test.html");

 exit;
# End of PHP script
?>