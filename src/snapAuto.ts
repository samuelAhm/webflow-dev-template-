//<!-- <script defer src="http://localhost:3000/snapAuto.js"></script> -->
console.log('snap');

// console.log('snapautos_your-offer-condition.html');

// const storedObject = JSON.parse(localStorage.getItem('sa_profObj'));

// const id = null;
// var profileObject = null;

// $(document).ready(function () {
//   const storedObj = JSON.parse(localStorage.getItem('sa_profObj'));

//   if (storedObj.hasOwnProperty('year')) {
//     $('#vehicle-info').text(`${storedObj.year} ${storedObj.make} ${storedObj.model}`);
//     $('#vin-info').text(`${storedObj.vin}`);
//   }

//   id = getUrlParameter('id');
//   // Assume encodedData is received on the other end...
//   // Step 3: Decode the Base64url string
//   const decodedString = decodeURIComponent(escape(base64urlDecode(id)));

//   console.log(decodedString); // Output: JSON string

//   console.log(storedObj); // Output: JSON object

//   $('#uuid').val(storedObj.uuid);
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('wf-form-Vehicle-Condition');

//   form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     profileObject.f_body = $('#paintBody-2').val();
//     profileObject.f_windshield = $('#windshield-2').val();
//     profileObject.f_tires = $('#tires-2').val();
//     profileObject.f_engine = $('#engine-2').val();
//     profileObject.f_ac = $('#ac-2').val();
//     profileObject.f_seats = $('#seats-2').val();
//     profileObject.f_electronics = $('#electronics-2').val();
//     profileObject.f_transmission = $('#transmission-2').val();
//     profileObject.f_os = $('#os-2').val();
//     profileObject.f_history = $('#history-2').val();
//     profileObject.f_title = $('#okTitle-2').val();
//     profileObject.f_titleType = $('#titleType-2').val();
//     profileObject.f_lien = $('#lien-2').val();
//     profileObject.f_dreamvalue = $('#dreamvalue').val();

//     if (!profileObject.hasOwnProperty('id')) {
//       if (profileObject.hasOwnProperty('vehicles')) {
//         Object.assign(profileObject, profileObject.vehicles[0]); // Do something if the property exists
//       }
//     }

//     localStorage.setItem('sa_profObj', JSON.stringify(profileObject));
//     const newProfileObject = base64urlEncode(
//       unescape(encodeURIComponent(JSON.stringify(profileObject)))
//     );

//     setTimeout(function () {
//       window.location.href = `your-offer-contact-info?id=${newProfileObject}`;
//     }, 1000);
//     //window.location.href = `your-offer-contact-info?id=${newProfileObject}`
//   });
// });

// var profileObject = {
//   type: 'data',
// };

// // Function to get a URL parameter by name
// function getUrlParameter(name) {
//   name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//   const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//   const results = regex.exec(location.search);
//   return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
// }

// // Function to decode Base64url data
// function base64urlDecode(data) {
//   data = data.replace(/-/g, '+').replace(/_/g, '/');
//   while (data.length % 4) {
//     data += '=';
//   }
//   const base64 = atob(data);
//   return base64;
// }

// // Function to encode data as Base64url
// function base64urlEncode(data) {
//   const base64 = btoa(data);
//   const base64url = base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
//   return base64url;
// }

// const offerEndpoint = 'https://hook.us1.make.com/ua38xfpp6huzus3vd1qd6a7c969xaqqx';

const storedObject = JSON.parse(localStorage.getItem('sa_profObj'));

let id = null; // Changed from const to let for consistency
let profileObject = { type: 'data' };

$(document).ready(function () {
  const storedObj = JSON.parse(localStorage.getItem('sa_profObj'));

  if (storedObj.vehicle?.hasOwnProperty('year')) {
    $('#vehicle-info').text(
      `${storedObj.vehicle.year} ${storedObj.vehicle.make} ${storedObj.vehicle.model}`
    );
    $('#vin-info').text(`${storedObj.vehicle.vin ? storedObj.vehicle.vin : 'no-vin'}`);
    $('#uuid').val(storedObj.uuid);
  } else if (storedObj.hasOwnProperty('year')) {
    console.log('this');
    $('#vehicle-info').text(`${storedObj.year} ${storedObj.make} ${storedObj.model}`);
    $('#vin-info').text(`${storedObj.vin ? storedObj.vin : 'no vin'}`);
    $('#uuid').val(storedObj.uuid);
  }

  id = getUrlParameter('id');

  if (id) {
    // Step 3: Decode the Base64url string
    const decodedString = decodeURIComponent(escape(base64urlDecode(id)));
    console.log(decodedString); // Output: JSON string

    try {
      profileObject = JSON.parse(decodedString); // Parse the decoded JSON string
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }

    console.log(profileObject); // Output: JSON object
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('wf-form-Vehicle-Condition');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    profileObject.f_body = $('#paintBody-2').val();
    profileObject.f_windshield = $('#windshield-2').val();
    profileObject.f_tires = $('#tires-2').val();
    profileObject.f_engine = $('#engine-2').val();
    profileObject.f_ac = $('#ac-2').val();
    profileObject.f_seats = $('#seats-2').val();
    profileObject.f_electronics = $('#electronics-2').val();
    profileObject.f_transmission = $('#transmission-2').val();
    profileObject.f_os = $('#os-2').val();
    profileObject.f_history = $('#history-2').val();
    profileObject.f_title = $('#okTitle-2').val();
    profileObject.f_titleType = $('#titleType-2').val();
    profileObject.f_lien = $('#lien-2').val();
    profileObject.f_dreamvalue = $('#dreamvalue').val();

    if (!profileObject.hasOwnProperty('id')) {
      if (profileObject.hasOwnProperty('vehicles')) {
        Object.assign(profileObject, profileObject.vehicles[0]); // Do something if the property exists
      }
    }

    localStorage.setItem('sa_profObj', JSON.stringify(profileObject));
    const newProfileObject = base64urlEncode(
      unescape(encodeURIComponent(JSON.stringify(profileObject)))
    );

    setTimeout(function () {
      window.location.href = `your-offer-contact-info?id=${newProfileObject}`;
    }, 1000);
  });
});

// Function to get a URL parameter by name
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to decode Base64url data
function base64urlDecode(data) {
  data = data.replace(/-/g, '+').replace(/_/g, '/');
  while (data.length % 4) {
    data += '=';
  }
  return atob(data);
}

// Function to encode data as Base64url
function base64urlEncode(data) {
  const base64 = btoa(data);
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

const offerEndpoint = 'https://hook.us1.make.com/ua38xfpp6huzus3vd1qd6a7c969xaqqx';

//corrected code end

/*
main code 
<!-- <script defer src="http://localhost:3000/snapAuto.js"></script> -->
<script type="text/javascript">

    console.log("snapautos_your-offer-condition.html");
    
    let storedObject = JSON.parse(localStorage.getItem('sa_profObj'));

    var id = null;
    var profileObject = null;
    
    document.addEventListener("DOMContentLoaded", function() {
    
        var form = document.getElementById("wf-form-Vehicle-Condition");
        
        form.addEventListener("submit", function(event) {
        
          event.preventDefault();
 
          profileObject.f_body = $('#paintBody-2').val();
          profileObject.f_windshield = $('#windshield-2').val();
          profileObject.f_tires = $('#tires-2').val();
          profileObject.f_engine = $('#engine-2').val();
          profileObject.f_ac = $('#ac-2').val();
          profileObject.f_seats = $('#seats-2').val();
          profileObject.f_electronics = $('#electronics-2').val();
          profileObject.f_transmission = $('#transmission-2').val();
          profileObject.f_os = $('#os-2').val();
          profileObject.f_history = $('#history-2').val();
          profileObject.f_title = $('#okTitle-2').val();
          profileObject.f_titleType = $('#titleType-2').val();
          profileObject.f_lien = $('#lien-2').val();
          profileObject.f_dreamvalue = $('#dreamvalue').val();
    
          if (!profileObject.hasOwnProperty("id")) {
            if (profileObject.hasOwnProperty("vehicles")) {
                Object.assign(profileObject, profileObject.vehicles[0]) // Do something if the property exists
            }
          }


          localStorage.setItem('sa_profObj', JSON.stringify(profileObject));
          var newProfileObject = base64urlEncode(unescape(encodeURIComponent(JSON.stringify(profileObject))));
    
    			setTimeout(function() {
              window.location.href = `your-offer-contact-info?id=${newProfileObject}`;
          }, 1000)
          //window.location.href = `your-offer-contact-info?id=${newProfileObject}`
        });
    });
    
    var profileObject = {
      'type': 'data'
    }
    
    // Function to get a URL parameter by name
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    
    // Function to decode Base64url data
    function base64urlDecode(data) {
        data = data.replace(/-/g, '+').replace(/_/g, '/'); 
        while (data.length % 4) {
            data += '=';  
        }
        var base64 = atob(data);
        return base64;
    }
    
    // Function to encode data as Base64url
    function base64urlEncode(data) {
        var base64 = btoa(data);
        var base64url = base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
        return base64url;
    }
    
    var offerEndpoint = "https://hook.us1.make.com/ua38xfpp6huzus3vd1qd6a7c969xaqqx";
    $(document).ready(function () {

        profileObject = JSON.parse(localStorage.getItem('sa_profObj'));

        if (profileObject.hasOwnProperty('year')) {
            $("#vehicle-info").text(`${profileObject.year} ${profileObject.make} ${profileObject.model}`);
            $("#vin-info").text(`${profileObject.vin}`);
        }
        
        id = getUrlParameter('id');
        // Assume encodedData is received on the other end...
        // Step 3: Decode the Base64url string
        var decodedString = decodeURIComponent(escape(base64urlDecode(id)));
        console.log(decodedString);  // Output: JSON string
      

        console.log(profileObject);  // Output: JSON object
    
        $('#uuid').val(profileObject.uuid);
        
 });
   

</script>
    
    


*/

// filterBtn.forEach((el) => {
//   el.addEventListener('change', function () {
//     allBtn.classList.remove('active');
//     console.log('click');
//   });
// });

// function initializeTabRotation(
//   tabWrapSelector,
//   tabMenuContainerSelector,
//   rotationInterval,
//   sectionSelector
// ) {
//   window.Webflow ||= [];
//   Webflow.push(function () {
//     const isMenuOpen = false;
//     let tabTimeout;
//     let observer;

//     // Function to handle tab rotation
//     function tabLoop() {
//       tabTimeout = setTimeout(function () {
//         // Check if an input is focused or if the mobile menu is open
//         if (!document.activeElement || document.activeElement.tagName !== 'INPUT') {
//           const $next = $(tabMenuContainerSelector).children('.w--current:first').next();
//           if ($next.length) {
//             $next.click();
//           } else {
//             $(tabWrapSelector + ':first').click();
//           }
//         } else {
//           tabLoop(); // Retry tab rotation after a delay if an input is focused or menu is open
//         }
//       }, rotationInterval); // Rotate tabs every rotationInterval milliseconds
//     }

//     // Reset and restart the tab rotation on tab click
//     $(tabWrapSelector).click(function (event) {
//       event.stopPropagation(); // Prevent event from affecting other elements
//       if (!$(this).find('input').is(':focus')) {
//         clearTimeout(tabTimeout);
//         tabLoop();
//       }
//     });

//     // Safari scroll fix
//     if (navigator.userAgent.includes('Safari')) {
//       document.querySelectorAll(tabWrapSelector).forEach((tab) => {
//         tab.focus = function () {
//           const x = window.scrollX;
//           const y = window.scrollY;
//           const restoreScroll = () => {
//             setTimeout(() => window.scrollTo(x, y), 1);
//             tab.removeEventListener('focus', restoreScroll);
//           };
//           tab.addEventListener('focus', restoreScroll);
//           HTMLElement.prototype.focus.apply(this, arguments);
//         };
//       });
//     }

//     // Intersection Observer callback
//     function handleIntersection(entries, observer) {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           // Start tab rotation when the section comes into the viewport
//           tabLoop();
//           // Unobserve the section after the animation starts
//           observer.unobserve(entry.target);
//         }
//       });
//     }

//     // Initialize Intersection Observer
//     observer = new IntersectionObserver(handleIntersection, {
//       root: null, // Use the viewport as the root
//       threshold: 0.3, // Trigger when at least 40% of the section is visible
//     });

//     // Observe the target section
//     const targetSection = document.querySelector(sectionSelector);
//     if (targetSection) {
//       observer.observe(targetSection);
//     }
//   });
// }

// initializeTabRotation('.tab-wrap-2', '.tab-menu-container-2', 3000, '#tbOne');
// initializeTabRotation('.tab-wrap-3', '.tab-menu-container-3', 3000, '#tbTwo');
// initializeTabRotation('[tab-wrap-2]', '[tab-menu-container-2]', 3000, '#tbTwo');
