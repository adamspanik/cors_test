function main() 
{
    console.log("adam-spanik-cors-test");
    $.ajax
    ({
        url: "http://www.cgistodulky.cz/csr/",
        headers: {"Access-Control-Allow-Origin": "*"},
    // http://localhost:8080/csrcovid-1.0.0/api/dev
    // https://www.cgistodulky.cz/csr/
    // https://www.cgistodulky.cz/csr/api/dev
        success: function(data) 
        {
            console.log(data);
        }
    });
}
