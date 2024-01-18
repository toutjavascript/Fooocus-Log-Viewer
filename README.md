# **Fooocus Log Viewer**

Fooocus Log Viewer is an add-on to https://github.com/lllyasviel/Fooocus. It creates a powerfull view of all your generated images and how you made them.
![Capture d’écran 2024-01-08 à 12 10 14](https://github.com/toutjavascript/Fooocus-Log-Viewer/assets/30899600/6ef6a842-a473-4d04-aaf7-7507008ef7fc)

Click to Zoom an image
![Capture d’écran 2024-01-08 à 12 10 27](https://github.com/toutjavascript/Fooocus-Log-Viewer/assets/30899600/713ecc47-0cfc-4381-a4c3-49154670f962)

## What you can do with **Fooocus Log Viewer**

Fooocus Log Viewer can be integrated in UI with auto resize to fully fill the usable screen space.

You will be able to :

- Browse all your images by dates and batches
- Choose the grid size
- View prompts differences
- Click an image to view it bigger with all prompt details
- Copy the prompt datas (seed, models, styles, loras, ...)

## Installation of Fooocus Log Viewer

Installation is very easy. No npm nor pip install. Files are in archive and load extra JS and CSS from CDN.

### 1/ First step

Copy the archive files (`viewer.html` and `viewer.js`) in `/Fooocus/outputs/` directory

You could directly open `viewer.html` with Fooocus localhost server
Adress looks like http://localhost:7865/file=outputs/viewer.html
Check the port number on Fooocus UI webpage

### 2/ Deep integration in Fooocus UI

A new deep integration is available. Quite easy to config, with only one file to modify.
You open `/modules/ui_gradio_extensions.py` file. At line 41, add :

```python
head += f'<script type="text/javascript" src="file=outputs/viewer.js"></script>\n'
```

Quit Fooocus if started and restart `run.bat` to reinit Fooocus

You will see new link [🎥 Image Log Viewer (iframe)] in bottom of [Setting] tab

Click on it to display the Log Viewer over the same UI

This integration will be overwritten every time Fooocus is autoupdated at start.

To avoid update, you can create a new `run-no-update.bat` with :

```bash
.\python_embeded\python.exe -s Fooocus\launch.py --theme=dark
pause
```

The dark theme offers a better experience.

## Fooocus Version Compability

This add-on is validated from V2.1.852 to V2.1.860 Fooocus version.

Each Fooocus update is at risk to break the proper functionning of this script.

Please contact when broken.

## Original idea and work 

The idea and initial work is inspired by @sngazm at https://github.com/lllyasviel/Fooocus/discussions/693


## Update log
1.4.0 
- Hide images deleted on folder
- Show number of images deleted

1.3.0 (thanks @ItsNoted for some of these ideas)
- Images of style are displayed on batch details
- Click on image thumbnail open zoomed image without targeting the magnifying glass
- Check for new image on today today's folder
- Could play sound when a new image is detected on today's folder
- Remember configuration choices (grid size, autoreload, sound on, display details, display metadata, ...)

1.2.0 Calendar Release
- View all the working day with images
- Reduce the size of batch details

1.1.0 New Year Release
- Next/Previous button to navigate between images history on zoom page
- Download Image button 
- A very simple "Metadata: copy to Clipboard" button. Paste the datas in Generate Textarea to get the same image

1.0.0 Initial public release
- Inline Fooocus UI one click integration


Next 1.x will be a more advanced version with :
- Search for text in prompt history
- Liked images listing
- Better UI integration in Fooocus UI (work on CSS to optimize size and position)
- Download Image button with metadata EXIF prompt auto added
- Download alls images of a batch in one click

Please share your ideas here by opening discussion. 

