// export function sum(arr) {
//   let total = 0;

//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     total += arr[i];
//   }

//   return total;
// }

// export function totalSum(arr) {
//   let sumT;

//   arr.forEach((element) => {
//     sumT += element;
//   });

//   return sumT;
// }
// console.log(totalSum([2, 4, 5]));

// https://www.zeiierman.com/

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

const domainName = 'eraser.io';
const imageResizerUrl = `https://${domainName}/cdn-cgi/image/format=avif,quality=90`;

const cgiUrl = `https://${domainName}/cdn-cgi/image/`;

async function handleRequest(request) {
  try {
    const response = await fetch(request);
    const type = response.headers.get('Content-Type') || '';

    // Efficient HTML Processing: Only modify if there are <img> tags
    if (type.includes('text/html')) {
      let text = await response.text();

      // Check if there are any images to replace before processing
      if (
        /<img[^>]+src=["']https?:\/\/(?:assets(?:-global)?|cdn\.prod)\.website-files\.com/.test(
          text
        )
      ) {
        // Replace the URLs in the src attributes
        text = text.replace(
          /(<img[^>]*src=["'])(https?:\/\/(?:assets(?:-global)?|cdn\.prod)\.website-files\.com\/[^\s"']+?\.(?:png|webp|jpg|svg|jpeg|gif))([^"'>]*)(["'>])/g,
          `$1${imageResizerUrl}/$2$3$4`
        );

        // Replace the URLs in the srcset attributes
        text = text.replace(
          /(<img[^>]*srcset=["'])([^"'>]+)(["'>])/g,
          (match, start, srcset, end) => {
            const replacedSrcset = srcset.replace(
              /(https:\/\/(?:assets(?:-global)?|cdn\.prod)\.website-files\.com\/[^\s,]+?\.(?:png|webp|jpg|svg|jpeg|gif))/g,
              `${imageResizerUrl}/$1`
            );
            return `${start}${replacedSrcset}${end}`;
          }
        );
      }

      return new Response(text, {
        headers: response.headers,
      });
    }

    // If the response is an image and it's from the Image Resizer, set cache headers
    if (type.startsWith('image/') && request.url.includes(`${cgiUrl}`)) {
      const newHeaders = new Headers(response.headers);

      // Example for dynamic cache control (this is a static implementation)
      // You might adjust this based on the image's path or query parameters
      newHeaders.set('Cache-Control', 'public, s-maxage=31536000, max-age=604800, immutable');

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
      });
    }

    return response;
  } catch (error) {
    // Enhanced error handling
    console.error('Error processing request:', error);
    return new Response('An error occurred while processing your request.', { status: 500 });
  }
}




document.addEventListener('DOMContentLoaded', () => {
  ///set link directory based on Device OS
  // Detect the operating system
  // function getOS() {
  //   const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  //   // iOS detection
  //   if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  //     return 'iOS';
  //   }

  //   // Android detection
  //   if (/android/i.test(userAgent)) {
  //     return 'Android';
  //   }

  //   // Default if not Android or iOS
  //   return 'other';
  // }

  // const iOSlink = `https://apps.apple.com/se/app/helpicon/id6450137041`;
  // const androidLink = `https://play.google.com/store/apps/details?id=com.helpicon.app&pcampaignid=web_share`;

  // Set the CTA link based on OS
  function setTracking() {
    //the link directory
    const allCta = [...document.querySelectorAll('[app-link]')] as HTMLLinkElement[];

    // const appLink = document.getElementById('app-cta-link');
    // const os = getOS();

    allCta.forEach((link) => {
      ///facebook tracking on click

      link.addEventListener('click', function () {
        fbq('track', 'Lead');
      });

      // if (os === 'iOS') {
      //   link.href = iOSlink;
      // } else if (os === 'Android') {
      //   link.href = androidLink;
      // } else {
      //   // Default link or message if the OS is not recognized
      //   link.href = iOSlink;
      // }
    });
  }

  // Run the function on page load
  window.onload = setTracking;

  const trackTrigger = document.querySelector('#track-slider') as HTMLElement;
  const trackCover = document.getElementById('track-cover') as HTMLElement;

  const activeTb = [...document.querySelectorAll('[set-active]')];

  const tractTl = gsap.timeline({
    scrollTrigger: {
      trigger: trackTrigger,
      start: 'top 25%',
      end: 'bottom 75%',
      scrub: true,
      // markers: true,
    },
  });

  activeTb.forEach((el) => {
    const capsuleBtn = el.querySelector('.steps-cap');
    const imgwrap = el.querySelector('.steps--img-wrap');

    const activeTl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 55%',
        // end: 'bottom 75%',
        scrub: true,
        //  markers: true,

        onEnter: function () {
          capsuleBtn?.classList.add('active');
          imgwrap?.classList.add('active');
        },
        onLeaveBack: function () {
          capsuleBtn?.classList.remove('active');
          imgwrap?.classList.remove('active');
        },
      },
    });
  });

  tractTl.to(trackCover, {
    height: '100%',
  });
});


{/* <script>



  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", async function (e) {
  
    const body = {};

    for (const input of e.target.elements) {
      switch (input.name) {
        case "First-Name":
          body.name = input.value;

          break;
        case "Last-Name":
          body.name = body.name ? `${body.name} ${input.value}` : input.value;

          break;
        case "Email-Address":
          body.email = input.value;

          break;
        case "Phone":
          body.phone = input.value;

          break;
        case "Message":
          body.body = input.value;

          break;
        default:
          break;
      }
    }

    try {
    	const baseUrl = window.location.host.includes("staging") ? "api.dimerdev.click" : "api.dimerhealth.com"
      const response = await fetch(
        `https://${baseUrl}/emails/app/wait`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic ZGltZXItYXBpOnc1RExKaU1PdE1TY2R3QW1sZUJOS0Q2Z3dMME1EWWZP"
          },
          body: JSON.stringify(body)
        }
      );

      if (!response.ok) {
        return "No response";
      }

      const result = await response.json();

      return result;
    } catch (error) {
      return "Error occurred";
    }
  });

</script> */}