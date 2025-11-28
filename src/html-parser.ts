document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#html-form');
  const textArea = document.querySelector('#html-textarea') as HTMLInputElement;
  const copy_text = document.getElementById('copyBtn') as HTMLButtonElement;

  const quillField = document.querySelector('#editor') as HTMLElement;

  form?.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();

    const tx_content = textArea.value;
    quillField.innerHTML = tx_content;
  });

  copy_text.addEventListener('click', function () {
    // Reference the Quill editor's root element

    // Create a range object and select all the content within the editor
    const range = document.createRange();
    range.selectNodeContents(quillField);

    // Remove any existing selections
    const selection = window.getSelection();
    selection?.removeAllRanges();

    // Add the new range to the selection
    selection?.addRange(range);

    try {
      // Execute the copy command
      const successful = document.execCommand('copy');
      if (successful) {
        alert('Content copied to clipboard!');
      } else {
        alert('Unable to copy content.');
      }
    } catch (err) {
      console.error('Copy command failed:', err);
    }

    // Clear the selection
    selection.removeAllRanges();
  });

  console.log(textArea.value);
});

//<p>Speckle 2.10 as just been released! This includes numerous new features and improvements, here are some of the highlights:</p><ul><li>🆕 Our <strong>viewer keeps getting better,</strong> we have now added support for <strong>progressive ambient occlusion</strong></li><li>🆒 We have greatly improved the <strong>performance of the IFC upload service</strong>, it’s now faster than ever before, <a href="https://speckle.guide/user/ifc.html#ifc-import-service">try it now</a>!</li><li><strong>Revit💘MEP:</strong> We have greatly improved suport for <strong>MEP elements</strong></li><li>🆒 We have added support for <strong>previewing commits in Revit</strong> before receiving them</li><li>🆕 You can now <strong><a href="https://speckle.community/t/open-comments-in-3d-view/4152">open 3D comments directly inside your Revit and Rhino</a></strong> models as views</li><li>🆒🆒🆒 We’ve launched an experimental <strong><a href="https://speckle.guide/user/mapping-tool.html">mapping tool send Rhino Geometry as Revit Elements</a></strong></li></ul><p>Here goes the full list👇:</p><p></p><h2 id="%F0%9F%94%8Cconnectors">🔌Connectors</h2><h3 id="desktopui">DesktopUI</h3><ul><li>Simplified Send and Receive pages</li><li>🔮 360 Previews</li></ul><figure class="kg-card kg-image-card"><img src="https://speckle.systems/content/images/2022/12/360preview.gif" class="kg-image" alt loading="lazy" width="395" height="765"></figure><h3 id="revit">Revit</h3><ul><li>🆕 MEP networks: mep elements will be sent as part of a network and their connections are preserved on receive</li><li>🆕 Open Comments directly in the Revit document as views!</li><li>🆕 Preview commits before receiving them</li><li>fix(revit): Duplicated mesh when sending nested familyinstance by <a href="https://github.com/Zhuangkh">@Zhuangkh</a> 👪</li><li>Added support for sending fabrication parts from Revit</li><li>Added support for curtain roofs, fixed height columns, and host elements that do not know they are host elements</li><li>❌ Removed support for <strong>Revit 2019</strong></li></ul><figure class="kg-card kg-image-card"><img src="https://speckle.systems/content/images/2022/12/687d00485cf8b01a7936256601527ada9c43dc0d.gif" class="kg-image" alt loading="lazy" width="1836" height="1131"></figure><h3 id="dynamo">Dynamo</h3><ul><li>Fixed a bug in Blocks that had invalid insertion planes</li><li>Fixed an issue where Arcs would not be able to be sent and received in Dynamo</li><li>Removes the assignment of a "default color" list to Dynamo meshes. This would just bloat the meshes without any reason.</li></ul><h3 id="rhino">Rhino</h3><ul><li>🆕 Open Comments directly in the Rhino project as views!</li><li>🆕 Mapping Tool <strong>alpha</strong> ⇒ Send Rhino Geometry as Revit Elements <a href="https://speckle.guide/user/mapping-tool.html">https://speckle.guide/user/mapping-tool.html</a></li><li>When receiving in update mode, new layers, materials, and block definitions will no longer be created if they already exist</li><li>fix: successfully converts blocks on receive</li></ul><figure class="kg-card kg-image-card"><img src="https://cdn.prod.website-files.com/66e7eaaeecf3474c0343c5d2/66e82a7ec2e77b97e73dbd90_ezgif.com-optimize.gif" class="kg-image" alt loading="lazy" width="1418" height="855"></figure><h3 id="grasshopper">Grasshopper</h3><ul><li>🆕 Initial support for Speckle nodes in Rhino.Compute/Hops environment</li></ul><h3 id="autocad-civil">Autocad &amp; Civil</h3><ul><li>When receiving in update mode, new layers will no longer be created if they already exist</li></ul><h3 id="sketchup">Sketchup</h3><ul><li>Ruby codebase refactored almost completely.</li><li>Fixed issue with Sqlite3, this fixed initialization problems on SketchUp 2021.</li></ul><h3 id="blender">Blender</h3><ul><li>Added support for Blender 3.3 LTS</li><li>Blender connector will also now install to Blender 3.4 (beta), untested by us.</li><li>Fixed bug with Clean meshes duplicating objects in scene.</li><li>Fixed issue with Mac installers.</li></ul><h3 id="unity">Unity</h3><ul><li><code>Stream Manager</code> component is now deprecated</li><li>Replaced by new <code>Speckle Receiver</code> and <code>Speckle Sender</code> components!</li></ul><figure class="kg-card kg-image-card"><img src="https://speckle.systems/content/images/2022/12/SpeckleReceiver.gif" class="kg-image" alt loading="lazy" width="713" height="882"></figure><figure class="kg-card kg-image-card"><img src="https://speckle.systems/content/images/2022/12/SpeckleSender.gif" class="kg-image" alt loading="lazy" width="713" height="882"></figure><ul><li>These add new features, like:</li><li>Searchable stream/branches/commits, rather than the long, ugly dropdown.</li><li>Preview image + more stream info</li><li>Editor sending support.</li><li>Reusable account/stream/branch/commit selection wrappers.</li><li>Can be used in runtime (non-editor) contexts</li><li>Still some improvements need to be made here, but the foundation is there.</li><li>The runtime sample scene is yet to be updated, and still uses the old components.</li></ul><h3 id="unreal-engine">Unreal Engine</h3><ul><li>Added UE5.1 support</li></ul><h3 id="archicad">ArchiCAD</h3><ul><li>Support of nested elements (Doors and Windows) in Walls</li></ul><h3 id="qgis">QGIS</h3><ul><li>Installer from Speckle Manager!</li><li>Support for conversion of larger Polygons to Meshes on Send</li><li>Sending CompoundCurves preserving the arcs structure</li></ul><figure class="kg-card kg-image-card"><img src="https://speckle.systems/content/images/2022/12/image-1.png" class="kg-image" alt loading="lazy" width="399" height="205"></figure><h3 id="arcgis">ArcGIS</h3><p>Receiving Revit BIM objects!</p><figure class="kg-card kg-image-card"><img src="https://speckle.systems/content/images/2022/12/Demo_BIM.gif" class="kg-image" alt loading="lazy" width="1207" height="802"></figure><h2 id="%F0%9F%8C%90server-web">🌐Server &amp; Web</h2><h3 id="3d-viewer">3D Viewer</h3><ul><li>Progressive ambient occlusion</li><li>Various fixes</li></ul><h3 id="server-frontend">Server &amp; Frontend</h3><ul><li>💪 IFC Import Service is much more powerful now</li><li>Progressive rendering</li><li>File import service was upgraded to the latest Specklepy version</li><li>Fixes to frontend</li></ul><h3 id="devops">DevOps</h3><ul><li>Fixes to Kubernetes Liveness and Readiness checks</li><li>Additional buckets in Prometheus histogram for preview service</li></ul><h3 id="net">.NET</h3><ul><li>Deprecated old user queries in favour of new graphQL endpoints.</li></ul><h3 id="python">Python</h3><ul><li>Deprecated old user queries in favour of new graphQL endpoints.</li></ul>
