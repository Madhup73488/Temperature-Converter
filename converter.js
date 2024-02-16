const form = document.querySelector('.converter-form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    convert();
});

function convert() {
    const conversions = {
        celsius: {
            fahrenheit: (input) => (input * 9 / 5) + 32,
            kelvin: (input) => input + 273.15
        },
        fahrenheit: {
            celsius: (input) => (input - 32) * 5 / 9,
            kelvin: (input) => (input - 32) * 5 / 9 + 273.15
        },
        kelvin: {
            celsius: (input) => input - 273.15,
            fahrenheit: (input) => (input - 273.15) * 9 / 5 + 32
        }
    };

    const fromUnit = document.getElementById("fromtemp").value;
    const toUnit = document.getElementById("totemp").value;
    const input = parseFloat(document.getElementById("input").value);
    let output = 0;

    if (fromUnit === toUnit) {
        output = input;
    }
    else if (conversions[fromUnit] && conversions[fromUnit][toUnit]) {
        output = conversions[fromUnit][toUnit](input);
    }
    else {
        output = 'Invalid convertion';
    }
    document.getElementById('result').innerHTML = output;
}