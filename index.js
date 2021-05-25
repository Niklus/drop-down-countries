// Import stylesheets
import './style.css';

const select = document.querySelector('#countries-dropdown');

const countries = ['Kenya', 'Tanzania', 'Uganda', 'Rwanda', 'Burundi', 'Sudan'];

const getDropdown = countries => {
  let htmlStr = '<option value="">Please select</option>';
  countries.forEach(country => {
    htmlStr += `<option value=${country.toLowerCase()}>${country}</option>`;
  });
  return htmlStr;
};

select.innerHTML = getDropdown(countries);

select.addEventListener('input', e => {
  document.getElementById('country').innerText = e.target.value.toUpperCase();
});
