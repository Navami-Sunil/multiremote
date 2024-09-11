Feature:Downloading pdf

Scenario:Download any pdf and enter email
  Given I am on the homepage
  When click resources 
  And Navigate to ebooks
  And Download a pdf
  And enter email
  Then an email will be verified