/* 
    Fooocus Log Viewer
    To autoadd link to viewer in Fooocus,
    open /modules/ui_gradio_extensions.py
    At line 41, add :

    head += f'<script type="text/javascript" src="file=outputs/viewer.js"></script>\n'

    Stop and Restart run.bat

    The viewer.js file makes the viewer usable in Fooocus UI

*/
console.log("Fooocus Log Viewer Include ./output/viewer.js");

/* Searching for the History Log link to add two new links */
function viewerLinkIntegration() {
    console.log("Fooocus Log Viewer viewerLinkIntegration() start");
    document.querySelectorAll("a").forEach(function(a) {
        if (a.innerText=="📚 History Log") {
          let newLink=document.createElement("a");
          newLink.setAttribute("target", "_blank");
          newLink.setAttribute("href", "file=outputs/viewer.html");
          newLink.setAttribute("style", "display:block; font-weight:bold; color: #ba00bd; ")
          newLink.innerText="🎥 Image Log Viewer (new tab)";
          a.parentElement.appendChild(newLink);

          let newLink2=document.createElement("span");
          newLink2.setAttribute("target", "_blank");
          newLink2.setAttribute("onclick", "viewerIframeIntegration()");
          newLink2.setAttribute("style", "display:block; font-weight:bold; cursor: pointer; color: #ba00bd; text-decoration: underline")
          newLink2.innerText="🎥 Image Log Viewer (iframe)";
          a.parentElement.appendChild(newLink2);
        }
    });

    /* Add a fixed 100% height div to get available height */
    let div=document.createElement("div");
    div.setAttribute("id", "availableHeight");
    div.setAttribute("style", "position: absolute; top:0px; left:0px; width:10px; height:100%; background-color:red; opacity: 0");
    document.body.appendChild(div);

}

/* Create iframe inline */
function viewerIframeIntegration() {
    console.log("Fooocus Log Viewer viewerIframeIntegration() start");
    /* Close if allready opened */
    if (document.querySelector("iframe#iframeViewer")) {
        console.log("Fooocus Log Viewer iframe allready in : delete");
        document.querySelector("iframe#iframeViewer").remove();
        document.querySelector("button#closeButton").remove();
        return true;
    }

    let iframe=document.createElement("iframe");
    iframe.setAttribute("src", "file=outputs/viewer.html");
    iframe.setAttribute("id", "iframeViewer");
    iframe.setAttribute("style", getViewerIframePosition());
    iframe.setAttribute("sandbox", "allow-same-origin allow-scripts allow-downloads");
    iframe.setAttribute("referrerpolicy", "no-referrer");
    document.body.appendChild(iframe);

    /* Add a close viewer button */
    let button=document.createElement("button");
    button.innerText="Close the Fooocus Log Viewer";
    button.setAttribute("id", "closeButton");
    button.setAttribute("style", "position: absolute; top:1px; left: 140px; font-weight:bold; color:#000; cursor: pointer");
    button.setAttribute("onclick", "viewerIframeIntegration()");
    document.body.appendChild(button);   

    /* Force full available height */
    let c=document.querySelector("div#final_gallery");
    let h=document.querySelector("div#availableHeight");
    c.style.height=(h.clientHeight-190)+"px";
    
    
}

/* Get new size and position */
function getViewerIframePosition() {
    
    let c=document.querySelector("div#final_gallery");
    if (c.clientWidth<100) { /* If generation is on */
      c=document.querySelector("div#component-3");
    }
    let tabs=document.querySelectorAll("div.tabs");

    let pad=20,
    top=c.offsetTop+15;
    left=parseInt((document.body.clientWidth-c.clientWidth-tabs[1].clientWidth-pad)/2);
    return `position: absolute; 
    z-index:10000;
    border:1px solid #980099;
    top:`+top+`px; 
    left:`+left+`px; 
    width:`+(c.offsetWidth+pad)+`px; 
    height:`+(c.offsetHeight)+`px;`
}

/* Check resize window event */
function resizeIframeViewer() {
    if (document.querySelector("iframe#iframeViewer")) {
        let iframe=document.querySelector("iframe#iframeViewer");
        iframe.setAttribute("style", getViewerIframePosition() );
    }
}

function viewerListenResize() {
    window.addEventListener("resize", function(evt) {
        resizeIframeViewer();
    });
    const myObserver = new ResizeObserver(entries => {
        resizeIframeViewer();
    });
    const final_gallery=document.querySelector("div#final_gallery");    
    myObserver.observe(final_gallery);
}

/* Activate when document is ready */
window.addEventListener("load", function(evt) {
    setTimeout(function() {
        viewerLinkIntegration();
        viewerListenResize();
    }, 500);
});


/* Communication between iframe and parent UI */
function jsonTransfer() {
    
}