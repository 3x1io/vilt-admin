- [Setup PayTabs](#setup)
- [Create a Payment Page](#create)

# PayTabs
<img width="30%" src="https://www.wppit.com/wp-content/uploads/2018/05/%D9%86%D9%86%D8%B4%D8%B1-%D9%83%D9%84-%D9%85%D8%A7-%D8%AA%D8%AD%D8%AA%D8%A7%D8%AC-%D9%85%D8%B9%D8%B1%D9%81%D8%AA%D9%87-%D8%B9%D9%86-%D8%A8%D9%88%D8%A7%D8%A8%D8%A9-%D8%A7%D9%84%D8%AF%D9%81%D8%B9-%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A-PayTabs-%D8%A8%D9%8A%D8%AA%D8%A7%D8%A8%D8%B3-min.jpg" alt="paytabs logo"/>
Our framework support a <a href="https://site.paytabs.com/en/" target="_blank">PayTabs</a> payment gateway to generate a payment page from PayTabs without any need to install any more packages or use a lot of code just use our PayTabs Service class
<hr>

<a name="setup">
## Setup PayTabs
</a>

after go to <a href="https://site.paytabs.com/en/" target="_blank">PayTabs</a> website and create a new account with your email you can get your security key from your dashboard and after that go to route `/admin/payment` and set your PayTabs email and key and save it, and it will send a request to PayTabs API and check if you input a valid email and key and after that save it to setting

your email or PayTabs can access By this helper 
```php
setting('paytabs.merchant_email')
```
and your key can be use by this helper

```php
setting('paytabs.secret_key')
```

and we take this value and set it to our Services Class a make it easy to use it
<hr>

<a name="create">
## Create a Payment Page
</a>

you can easy create a payment page by using our Services Class like this example

```php
use App\Services\Paytabs;

Paytabs::create(
    $orderID,
    $customerFirstName,
    $customerLastName,
    $customerPhone,
    $customerAddress,
    $orderCart,
    $customerCity,
    $customerArea,
    $orderShippingFree,
    $orderTotal
);
```

like this example the Paytabs Class has a method `create()` this method take some args and return with the payments page url so you can redirect to it, after your payment is success it will be callback to the link 

`callback/paytabs` with a POST method have an ID of transaction and your ref of order the set the order done with the call back.
