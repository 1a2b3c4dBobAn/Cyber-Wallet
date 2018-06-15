# Cyber-Wallet
[Live Demo](https://cyber-wallet.herokuapp.com/#/login) | [Wiki](https://github.com/1a2b3c4dBobAn/Cyber-Wallet/wiki)

Cyber-Wallet is a trading platform for users to efficiently practice tradings with real-time stock data without any risk of losing money. The inspiration comes from Robinhood and the visual appearance is inspired by synthwave.

Things you may want to cover:

# Features

* **User authentication:** end-to-end using BCrypt.

* **Real-time Stock Data:** user can get all real-time data of the stocks that on Nasdap. 

* **Stock Trade System:** User can simulate real-time trading with

* **Watchlist:** Follow stocks without submitting an order.

* **Stock Searching:** Search real stocks by stock symbol or company name.

* **Portfollio:** Record user's real-time purchase power.

* **Dashboard:** View portfolio value over time, current cash allocation, and holdings diversity.

# Technologies

 * **Backend:**  Rails/ActiveRecord/PostgreSQL
 
 * **Frontend:**  React/Redux/javascript
 
 * **Recharts**
  
 * **HTTParty**
   
 * **Alpha Vantage**
 
 
## Demos
 
### Login
 
* User can sign up and log in, and also a interactive sample chart is on the page to play with.

 
### Dashboard

![pic 1](https://media.giphy.com/media/dYQxMdDgrcgNCXvw0A/giphy.gif)

* Users can view key financial performance metrics on their personal dashboard.
* The historical portfolio performance will be showed here.
* The Cash Allocation and Holdings Diversity charts are generated from Portfolio model associate with Fill model.
* Users can also view an index of all stocks in their watchlist, click the watchlist and the real-time stock data show page will be rendered.
 
### Real-time Stock Show Page

* User can navigate to individual stock show page through search bar or watchlist, the real-time data will showed on the page.
* Stock historic prices is chated on Today, 1M, 5M, 1YR, 5YR, and today's stock day is pure live data.
* The color of the chart will changes based on the prices movement.
 

### Real-time Trading system

* The fill form is on the right part of stock show page.
* The trading system is handle by both portfolio model and fill model.
  
## Stock Searching
 
The searching use the SQL technoloies and will show the acurate searching result based on user's input keyword.
 
## Design Highlights
 
 
 
 
