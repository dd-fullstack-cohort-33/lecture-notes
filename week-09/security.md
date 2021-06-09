# Intro to Security for Web Developers
- Developers have access to huge amounts of sensitive information
  - We have responsibility to protect that information, both ethically and pragmatically
- The amount of value that data has will define how hard hackers will work to get it
  - Hackers will work very hard to gain access to orgs that have data that is of extremely high value (e.g. banks, governments) 
    - [Spearphishing](https://www.csoonline.com/article/3334617/what-is-spear-phishing-why-targeted-email-attacks-are-so-difficult-to-stop.html)
    - [2016 Democratic National Committee email leak](https://en.wikipedia.org/wiki/2016_Democratic_National_Committee_email_leak)
  - For most orgs, their data is not as valuable and hackers won't work as hard.
    - These orgs fall prey to generalized attacks where hackers try the same, untargeted attacks against lots of sites
    - Only takes bare minimum to avoid this type of attack!
    - Like running from the bear -- don't have to be the fastest, the second slowest will do.


## Basic concept of security: Defense in depth
- a.k.a. layered security a.k.a. onion model
  - https://simple.wikipedia.org/wiki/Defense_in_depth_(computing)
- Idea: multiple layers of security to protect different items
- attackers need to compromise ALL layers of security to get access to the truly sensitive information
- best paired with **monitoring** - continuously checking to see that access to each layer matches the
access you'd expect
  - if you see suspicious traffic, may indicate a security hole. Investigate how they got access, then fix the hole if possible.
  - this greatly reduces the time that an attacker has to compromise a system
  
## Common attacks
- **social engineering** - talking your way in rather than using technology 
  - example, calling a tech support line and asking them to just tell you the password
  - These attacks can be chained -- use the info you got from earlier contacts to make yourself credible
  - Non-technical attack - no technical defense!
    - Only defense is good security policies combined with frequent training
- **SQL injection**
  - putting SQL into an input and tricking the SQL server
  ```SQL
  # Vulnerable code
  $query = "SELECT username, password
  FROM user
  WHERE username = '" . $_POST["username"] . "' AND password = '" . $_POST["password"] . "'";

  # Attack
  Username: ' OR 1 = 1 --
  Password: password

  # Resulting query.  Everything after -- is an SQL comment and is ignored.
  $query = "SELECT username, password
  FROM user
  WHERE username = '' OR 1 = 1 -- ' AND password = 'password'";
  ```
  - [xkcd: Bobby Tables](https://xkcd.com/327/)
  - Defend against this by sanitizing your all input from your users, and use prepared statements
    - This is a major reason for using a backend like Express backend rather than writing raw MySQL queries
- **cross-site scripting** a.k.a. XSS - executing arbitrary JavaScript on somebody else's site
  ```HTML
  
  <!-- Form -->
  Search: __________________
  [ Search ]

  <!-- Vulnerable code after submit. -->
  <div>"You searched for " . $_GET["search"]</div>

  <!-- Attack -->
  Search: <script>alert("Malicious Attack")</script>

  <!-- Resulting DOM -->
  <div>You searched for <script>alert("Malicious attack")</script></div>
  ```
  - defend against this by using input sanitization
- **cross-site request forgery** a.k.a. CSRF - Accessing a user's session on another site
  - this happens when we blindly trust input from our forms without verifying it
  - defense: anti-forgery tokens - give user a secret token when they log in, then verify that it is present on every subsequent request by that user.
    - You'll see this referred to as JWT tokens in the example capstone
- Other attacks exist, but these are the most common and most easily scripted.
  - You must defend against these attacks or your site will quickly become compromised and comprised solely of ads for black market meds, porn, and cryptocurrency scams
  
### Golden rule for writing secure code
Assume that all users are malicious and will attempt to break your site, then engineer your site so that they can't do it.

## Basic security practices for web devs
- Keep your contributed codebase and your server software up to date
  - many hacks happen because of publicly known vulnerabilities on old code.
  - have a security update policy and stick to it
- Have a code review process that includes security review
- Have backups
  - If you have a backup, you can always shut down a site and spin it back up from a known good copy
- Do occasional security audits.  Check your infrastructure - is it up to date?
- Advanced option: Invest in monitoring to watch for attacks and proactively notify you about suspicious activity on your site or server.
  - Good for orgs with high-value data or deep pockets
