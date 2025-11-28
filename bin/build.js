import * as esbuild from 'esbuild';
import { readdirSync } from 'fs';
import { join, sep } from 'path';

// Config output
const BUILD_DIRECTORY = 'dist';
const PRODUCTION = process.env.NODE_ENV === 'production';

// Config entrypoint files
const ENTRY_POINTS = [
  'src/index.ts',
  'src/agudah.ts',
  'src/einsAnimation.ts',
  'src/tq.ts',
  'src/dub.ts',
  'src/fetcherr.ts',
  'src/modeSwitch.ts',
  'src/popUpslide.ts',
  'src/new_index.ts',
  'src/techloqPricing.ts',
  'src/gsap-anim.ts',
  'src/select-formRender.ts',
  'src/playbook.ts',
  'src/lottie.ts',
  'src/faq.ts',
  'src/abt.ts',
  'src/calc.ts',
  'src/snapAuto.ts',
  'src/zeiierman.ts',
  'src/gsap/gsapTextsplit.ts',
  'src/webflowAutoTab.ts',
  'src/gsap/navObserve.ts',
  'src/gsap/glideUpAnimation.ts',
  'src/gsap/filter.ts',
  'src/gsap/toc_stretch.ts',
  'src/html-parser.ts',
  'src/gsap/helpIcon.ts',
  'src/gsap/outbound.ts',
  'src/gsap/outboundCurrent.ts',
  'src/eveandRogue.ts',
  'src/gsap/zeiierman_blkfriday.ts',
  'src/courseEngine.ts',
  'src/nav.ts',
  'src/gsap/thomasInvest.ts',
  'src/video_popup.ts',
  'src/gsap/scandinavian.ts',
  'src/gsap/countUp.ts',
  'src/gsap/viaduct.ts',
  'src/framer-motion/flow-digita.ts',
  'src/flowdigital/how-we-help.ts',
  'src/flowdigital/software_setup.ts',
  'src/flowdigital/unlimited_auto.ts',
  'src/gsap/grit-lab.ts',
  'src/flowdigital/jotform.ts',
  'src/flowdigital/software_specic.ts',
  'src/flowdigital/schedule.ts',
  'src/flowdigital/pipdrive.ts',
  'src/flowdigital/zapier.ts',
  'src/flowdigital/airtable.ts',
  'src/flowdigital/navEl.ts',
  'src/flowdigital/abt-page.ts',
  'src/flowdigital/blog_details.ts',
  'src/gsap/blockhorizon.ts',
  'src/particle.ts',
  'src/anim/homepage/hmPage.ts',
  'src/anim/webdesignPg.ts',
  'src/anim/abtPage.ts',
  'src/anim/projects_pg.ts',
  'src/anim/talentSourcingPg.ts',
  'src/anim/careers.ts',
  'src/anim/ai-hub.ts',
  'src/anim/nav_animation.ts',
  'src/anim/project-details.ts',
  'src/anim/ai_details.ts',
  'src/flowdigital/cs-details.ts',
  'src/framer-motion/modernize.ts',
  'src/prime-connect/homepage.ts',
  'src/prime-connect/about.ts',
  'src/prime-connect/phonePage.ts',
  'src/prime-connect/connectivityPg.ts',
  'src/prime-connect/cs-details.ts',
  'src/prime-connect/cs-mainPage.ts',
  'src/prime-connect/landlordPg.ts',
  'src/prime-connect/navEl.ts',
  'src/prime-connect/Tenants.ts',
  'src/prime-connect/contact-us.ts',
  'src/prime-connect/textSplitScroll.ts',
  'src/prime-connect/termsPage.ts',
  'src/prime-connect/bottomImageAnim.ts',
  'src/prime-connect/FloatingBubbleAnim.ts',
  'src/gsap/brezAnimation.ts',
  'src/template-build/custom-select-element.ts',
  'src/template-build/mobileMenu.ts',
  'src/gsap/blockhorizon-ticker.ts',
  'src/evite.ts',
  'src/saba.ts',
  'src/staffUA.ts',
];

// Config dev serving
const LIVE_RELOAD = !PRODUCTION;
const SERVE_PORT = 3000;
const SERVE_ORIGIN = `http://localhost:${SERVE_PORT}`;

// Create context
const context = await esbuild.context({
  bundle: true,
  entryPoints: ENTRY_POINTS,
  outdir: BUILD_DIRECTORY,
  minify: PRODUCTION,
  sourcemap: !PRODUCTION,
  target: PRODUCTION ? 'es2019' : 'esnext',
  inject: LIVE_RELOAD ? ['./bin/live-reload.js'] : undefined,
  define: {
    SERVE_ORIGIN: JSON.stringify(SERVE_ORIGIN),
  },
  external: ['gsap/SplitText'],
});

// Build files in prod
if (PRODUCTION) {
  await context.rebuild();
  context.dispose();
}

// Watch and serve files in dev
else {
  await context.watch();
  await context
    .serve({
      servedir: BUILD_DIRECTORY,
      port: SERVE_PORT,
    })
    .then(logServedFiles);
}

/**
 * Logs information about the files that are being served during local development.
 */
function logServedFiles() {
  /**
   * Recursively gets all files in a directory.
   * @param {string} dirPath
   * @returns {string[]} An array of file paths.
   */
  const getFiles = (dirPath) => {
    const files = readdirSync(dirPath, { withFileTypes: true }).map((dirent) => {
      const path = join(dirPath, dirent.name);
      return dirent.isDirectory() ? getFiles(path) : path;
    });

    return files.flat();
  };

  const files = getFiles(BUILD_DIRECTORY);

  const filesInfo = files
    .map((file) => {
      if (file.endsWith('.map')) return;

      // Normalize path and create file location
      const paths = file.split(sep);
      paths[0] = SERVE_ORIGIN;

      const location = paths.join('/');

      // Create import suggestion
      const tag = location.endsWith('.css')
        ? `<link href="${location}" rel="stylesheet" type="text/css"/>`
        : `<script defer src="${location}"></script>`;

      return {
        'File Location': location,
        'Import Suggestion': tag,
      };
    })
    .filter(Boolean);

  // eslint-disable-next-line no-console
  console.table(filesInfo);
}
