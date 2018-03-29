## SQL Queries for the Chinook Database

1. Provide a query showing Customers (just their full names, customer ID and country) who are not in the US.
```
SELECT FirstName || " " || LastName AS "Full Name", Country, CustomerId FROM Customer WHERE Country != "USA"
```

2. Provide a query only showing the Customers from Brazil.
```
SELECT FirstName || " " || LastName AS "Full Name", Country, CustomerId FROM Customer WHERE Country = "Brazil"
```

3. Provide a query showing the Invoices of customers who are from Brazil. The resultant table should show the customer's full name, Invoice ID, Date of the invoice and billing country.
Jordan's note: This one was asking specifically customers from Brazil, not invoices with the billing address in Brazil, so I joined on the customers table. 
```
SELECT Invoice.* FROM Invoice JOIN Customer ON Invoice.CustomerId = Customer.CustomerId WHERE Customer.Country="Brazil"
```
You get the same result with this query, but I guess theoretically it could turn up different results if a customer had a billing address in a country they didn't live in.
```
SELECT Invoice.* FROM Invoice WHERE BillingCountry="Brazil"
```

4. Provide a query showing only the Employees who are Sales Agents.
```
SELECT * FROM Employee WHERE Title="Sales Support Agent"
```

5. Provide a query showing a unique list of billing countries from the Invoice table.
```
SELECT BillingCountry FROM Invoice GROUP BY BillingCountry
```

6. Provide a query that shows the invoices associated with each sales agent. The resultant table should include the Sales Agent's full name.
```
SELECT Employee.FirstName || " " || Employee.LastName AS "Full Name", 
Invoice.* FROM Invoice JOIN Customer 
ON Invoice.CustomerId = Customer.CustomerId 
JOIN Employee 
ON Customer.SupportRepId = Employee.EmployeeId
```


7. Provide a query that shows the Invoice Total, Customer name, Country and Sale Agent name for all invoices and customers.
```
SELECT Invoice.Total, 
Customer.FirstName || " " || Customer.LastName AS "Customer Name", 
Customer.Country, Employee.FirstName || " " || Employee.LastName AS "Sales Agent Name" 
FROM Invoice 
JOIN Customer 
ON Invoice.CustomerId = Customer.CustomerId 
JOIN Employee on Customer.SupportRepId = Employee.EmployeeId
```

8. How many Invoices were there in 2009 and 2011? What are the respective total sales for each of those years?
There were 83 invoices in 2009 and the total sales amount was $449.46.
```
SELECT COUNT(*) AS "Total Number of Invoices",  SUM(Total)
FROM Invoice WHERE InvoiceDate LIKE  "2009%"
```

Aaaand there were also 83 invoices in 2011. The total sales amount was $469.58.
```
SELECT COUNT(*) AS "Total Number of Invoices",  
SUM(Total)FROM Invoice 
WHERE InvoiceDate LIKE  "2011%"
```

9. Looking at the InvoiceLine table, provide a query that COUNTs the number of line items for Invoice ID 37.
```
SELECT COUNT(*) AS "Lines on Invoice" 
FROM InvoiceLine 
WHERE InvoiceLine.InvoiceId=37
```

10. Looking at the InvoiceLine table, provide a query that COUNTs the number of line items for each Invoice. HINT: [GROUP BY](http://www.sqlite.org/lang_select.html#resultset)
```
SELECT COUNT(*) AS "COUNT" 
FROM InvoiceLine 
GROUP BY InvoiceLine.InvoiceId
```

11. Provide a query that includes the track name with each invoice line item.
```
SELECT InvoiceLine.*, Track.Name as "Track Name" 
FROM InvoiceLine 
JOIN Track ON InvoiceLine.TrackId = Track.TrackId
```

12. Provide a query that includes the purchased track name AND artist name with each invoice line item.
```
SELECT InvoiceLine.*, Track.Name as "Track Name", Artist.Name AS "Artist Name" FROM InvoiceLine JOIN Track ON InvoiceLine.TrackId = Track.TrackId JOIN Album ON Track.AlbumId = Album.AlbumId JOIN Artist ON Album.ArtistId = Artist.ArtistId``

13. Provide a query that shows the # of invoices per country. HINT: [GROUP BY](http://www.sqlite.org/lang_select.html#resultset)
```
SELECT Count(*) AS "Count", BillingCountry AS "Billing Country" 
FROM Invoice 
GROUP BY BillingCountry
```


// GO BACK AND DOUBLE CHECK THIS ONE!
14. Provide a query that shows the total number of tracks in each playlist. The Playlist name should be included on the resultant table.
```
SELECT Count(*) AS "Number of Songs", Playlist.Name AS "Playlist Name" 
FROM PlaylistTrack 
JOIN Playlist ON PlaylistTrack.PlaylistId = Playlist.PlaylistId 
GROUP BY Playlist.Name
```


15. Provide a query that shows all the Tracks, but displays no IDs. The resultant table should include the Album name, Media type and Genre.
```
SELECT Track.Name As "Track Name", Album.Title as "Album Name", 
Genre.Name as "Genre", MediaType.Name "Media Type"
FROM Track 
JOIN Album ON Track.AlbumId = Album.AlbumId 
JOIN Genre ON Track.GenreId = Genre.GenreId 
JOIN MediaType ON MediaType.MediaTypeId = Track.MediaTypeId
```

16. Provide a query that shows all Invoices but includes the # of invoice line items.
```
SELECT Invoice.*, COUNT(InvoiceLine.InvoiceId) AS "Number of Lines" 
FROM Invoice 
JOIN InvoiceLine ON Invoice.InvoiceId = InvoiceLine.InvoiceId 
GROUP BY Invoice.InvoiceId
```

17. Provide a query that shows total sales made by each sales agent.
```
SELECT SUM(Invoice.Total) AS "Total Sum", 
Employee.FirstName || " " || Employee.LastName AS "Employee Name" 
FROM Invoice 
JOIN Customer ON Invoice.CustomerId = Customer.CustomerId 
JOIN Employee ON Customer.SupportRepId = Employee.EmployeeId 
GROUP BY Employee.EmployeeId
```

18. Which sales agent made the most in sales in 2009?
Steve Johnson!
```
SELECT Employee.FirstName || " " || Employee.LastName AS "Sales Agent Name", 
SUM(Invoice.Total)AS "Gross Sales" 
FROM Employee 
JOIN Customer ON Customer.SupportRepId = Employee.EmployeeId 
JOIN Invoice ON Invoice.CustomerId = Customer.CustomerId 
WHERE Invoice.InvoiceDate LIKE "2009%" 
GROUP BY Employee.EmployeeId 
ORDER BY sum(Invoice.Total)
```

19. Which sales agent made the most in sales in 2010?
Jane Peacock!
```
SELECT Employee.FirstName || " " || Employee.LastName AS "Sales Agent Name", 
SUM(Invoice.Total)AS "Gross Sales" 
FROM Employee 
JOIN Customer ON Customer.SupportRepId = Employee.EmployeeId 
JOIN Invoice ON Invoice.CustomerId = Customer.CustomerId 
WHERE Invoice.InvoiceDate LIKE "2010%" 
GROUP BY Employee.EmployeeId ORDER BY sum(Invoice.Total)
```

20. Which sales agent made the most in sales over all?
Jane Peacock!
```
SELECT Employee.FirstName || " " || Employee.LastName AS "Sales Agent Name", 
SUM(Invoice.Total)AS "Gross Sales" 
FROM Employee 
JOIN Customer ON Customer.SupportRepId = Employee.EmployeeId 
JOIN Invoice ON Invoice.CustomerId = Customer.CustomerId 
GROUP BY Employee.EmployeeId 
ORDER BY sum(Invoice.Total)
```

21. Provide a query that shows the # of customers assigned to each sales agent.
```
SELECT Count(Customer.CustomerId) AS "# of Customers", 
Employee.FirstName || " " || Employee.LastName AS "Employee Name" 
FROM Customer JOIN Employee ON Customer.SupportRepId = Employee.EmployeeId GROUP BY Employee.EmployeeId
```

22. Provide a query that shows the total sales per country. Which country's customers spent the most? 
USA!
```
SELECT SUM(Invoice.Total) AS "Total Sales", Invoice.BillingCountry AS "Country" 
FROM Invoice 
GROUP BY Invoice.BillingCountry 
ORDER BY SUM(Invoice.Total) 
```

23. Provide a query that shows the most purchased track of 2013.
```
SELECT Track.Name, Invoice.InvoiceDate, SUM(InvoiceLine.Quantity) as "Quantity" 
FROM InvoiceLine 
JOIN Invoice ON Invoice.InvoiceId = InvoiceLine.InvoiceId 
JOIN Track ON Track.TrackId = InvoiceLine.TrackId 
WHERE Invoice.InvoiceDate Like "2013%" 
GROUP BY Track.Name 
ORDER BY SUM(InvoiceLine.Quantity) DESC LIMIT 1
```

24. Provide a query that shows the top 5 most purchased tracks over all.
```
SELECT Track.Name, Invoice.InvoiceDate, SUM(InvoiceLine.Quantity) as "Quantity" 
FROM InvoiceLine JOIN Invoice ON Invoice.InvoiceId = InvoiceLine.InvoiceId 
JOIN Track ON Track.TrackId = InvoiceLine.TrackId 
GROUP BY Track.Name
ORDER BY SUM(InvoiceLine.Quantity) DESC LIMIT 5
```

25. Provide a query that shows the top 3 best selling artists.
```
SELECT Artist.Name, COUNT(InvoiceLine.TrackId) AS "Number of Tracks Sold" 
FROM Artist 
JOIN Album ON Artist.ArtistId = Album.ArtistId 
JOIN Track ON Album.AlbumId = Track.AlbumId 
JOIN InvoiceLine ON Track.TrackId = InvoiceLine.TrackId 
GROUP BY Artist.Name 
ORDER BY COUNT(InvoiceLine.TrackId) DESC LIMIT 3
```

26. Provide a query that shows the most purchased Media Type.
```
SELECT MediaType.Name,
COUNT(InvoiceLine.TrackId) AS "Number of Tracks Purcahsed"
FROM MediaType 
JOIN Track ON MediaType.MediaTypeId = Track.MediaTypeId 
JOIN InvoiceLine ON Track.TrackId = InvoiceLine.TrackId 
GROUP BY MediaType.Name
ORDER BY COUNT(InvoiceLine.TrackId) DESC LIMIT 1
```

27. Provide a query that shows the number tracks purchased in all invoices that contain more than one genre.
```
SELECT Invoice.InvoiceId AS "Invoice Id",  group_concat(DISTINCT(Genre.Name)) AS "Genres",
COUNT(DISTINCT Genre.Name) AS TotalGenres,
COUNT(InvoiceLine.TrackId) AS "Number of Tracks Purchased"
FROM InvoiceLine
JOIN Invoice ON InvoiceLine.InvoiceId = Invoice.InvoiceId
JOIN Track ON Track.TrackId = InvoiceLine.TrackId
JOIN Genre ON Genre.GenreId = Track.GenreId
GROUP BY Invoice.InvoiceId
HAVING  TotalGenres> 1
ORDER BY TotalGenres DESC 
```