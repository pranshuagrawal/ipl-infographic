# IPL - Inforgraphic

The story behind this project is that a person has lost interest in watching cricket. So I had to create a web application which will pull out some insights from past 9 years of Indian Premier League Data.

This web application is presenting 6 pieces of information. Each information is represented using a very easy to understand visualization. Each visualization is further couple with text based actionable insight representing the graph in as many words.

## Getting Started

This is a repository storing the complete un-compiled typescript code where you can get an idea what I have done here.

To view of demo of the compiled version, head on to this link. [Demo Link.](https://pranshuagrawal.github.io/idnex.html)

Or to run this code base follow the further steps

### Prerequisites

 - Install NPM
 - Install Angular 
 
### Running the application

 - Open Terminal
 - Go to the cloned directory
 - Execute the following command
 
 ```$xslt
ng serve --port <port-number>
```
## Data

Since the given data was in `.csv` format. Web based endpoints were created using `PHP` which were taking data from the `.csv` files and transformed further into the required format.


## Framework / Libraries Used

 - Web framework used is **Angular**.
   - Primary reason of using this is becuase I have decent understanding of this frameworks. 
   - I like the way it maintains the structure of the code. 
   - Use of TypeScript enhances the object orientedness of this web framework.
 - To build responsive layouts, **Bootstrap 4** is used
 - **Highcharts** are used for data visualizations.
 - Other technologies used are **HTML 5, CSS 3, JavaScript ES6**
 - This project **does not** required jQuery.
 
## Bonus Points

I have used Google Lighthouse for benchmarking this application. Checklist used for testing [PWA criteria](https://developers.google.com/web/progressive-web-apps/checklist)

 - Page load time is optimized on this application and has scored **80/100 on Google Lighthouse** (screen shot attached further). 
    - No render blocking scripts.
    - CSS and JS are minified.
    - Text compression is enabled.
    - No page redirects.
    - Total transfered payload size is just 750 kb.
    - Less DOM Nodes - 570.
    
 - It is a **progressive web application** with a score of **100/100 on Google Lighthouse**
    - Registers a **Service Worker**
    - Responds with a 200 when offline.
    - Uses HTTPS. Redirects HTTP traffic to HTTPS.
    - Page load is fast enough on 3G.
    - User can be prompted to Install the Web App.
    - Address bar matches brand colors
    - Content is sized correctly for the viewport.
    
 - It is mobile responsive. 
 - It works when a user is in offline mode or in low connectivity zone.
 
 
![alt text](https://raw.githubusercontent.com/pranshuagrawal/ipl-infographic/master/src/assets/images/benchmarking.png)

    

## What's Included

```$xslt
ipl-infographic/
├── src/
│   ├── app/
│       ├── header/
│       ├── team-stats/
│           ├──individual-team-stats/
│       ├─- top-stats/
│           ├──individual-stats/
│       ├── overs/
│       ├── innings/
│   ├── assets/
│   ├── enviornment/
├── node_modules
├── e2e
```
