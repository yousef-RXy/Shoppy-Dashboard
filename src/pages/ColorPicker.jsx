import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components';

const change = args => {
  document.getElementById('preview').style.backgroundColor =
    args.currentValue.hex;
};

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 mt-16 bg-white  rounded-3xl">
      <Header category="App" title="ColorPicker" />
      <div className="text-center ">
        <div id="preview"></div>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <ColorPickerComponent
              id="inline-palette"
              value="#009688"
              mode="Palette"
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline-picker"
              value="#009688"
              mode="Picker"
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
