import os
import glob
import numpy as np
import holoviews as hv
hv.extension('bokeh')
hv.output(widget_location='bottom')

def make_holomap(im_dir, im_width, im_height, scale_factor, out_file_name):
    """
    Make HoloMap from images in `im_dir` and save as html.
    `im_width`: image width
    `im_height`: image height
    `scale_factor`: factor to divide width and height by
    `out_file_name`: filename to save .html file to
    """
    im_file_list = glob.glob(os.path.join(im_dir, '*.png'))
    im_file_list.sort()
    temperatures = [
        file_name[file_name.rfind('_')+1:file_name.find('.png')] 
        for file_name in im_file_list
    ]
    temperatures[-2] = np.nan

    im_dict = {temperature: file_name for temperature, file_name in zip(temperatures, im_file_list)}

    temperatures_ordered = [temperatures[-2]] + temperatures[:-2]
    im_dict_ordered = {
        float(temperature): im_dict[temperature] 
        for temperature in temperatures_ordered
    }
    
    hmap = hv.HoloMap(
        {
            temperature: hv.RGB.load_image(
                file_name
            ).opts(
                title='',
                xaxis=None, 
                yaxis=None,
                frame_width=int(im_width / scale_factor),
                frame_height=int(im_height / scale_factor),
                toolbar=None,
                default_tools=[],
            ) for temperature, file_name in im_dict_ordered.items()
        }, 
            kdims=['temperature (°C)']
    )
    
    hv.save(hmap, out_file_name)
    
if __name__ == '__main__':
    im_dirs = ['TcI-variants_hists', 'TcI-state-switch_hists']
    im_widths = {
        'TcI-variants_hists': 2661,
        'TcI-state-switch_hists': 1243
        
    }
    im_heights = {
        'TcI-variants_hists': 518,
        'TcI-state-switch_hists': 1214
    }
    scale_factors = {
        'TcI-variants_hists': 2.66,
        'TcI-state-switch_hists': 2
    }
    
    for im_dir in im_dirs:
        make_holomap(
            im_dir, 
            im_widths[im_dir],
            im_heights[im_dir],
            scale_factors[im_dir],
            f'{im_dir[:-6]}-histograms-interactive-nan.html'
        )