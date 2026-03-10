---
sidebar_position: 1
---

# IIDXOLLER Options Manual

## 1. Introduction to IIDXOLLER Options

The DAOdesign team created this software based on years of experience.

If you encounter any problems during use or have other suggestions, please contact us via email or Twitter and we will actively improve it.

A variety of modes are pre-made, and different parameters can be set in different modes, which is convenient and quick.

## 2. Download

[IIDXOLLER Options V3.2](https://www.dj-dao.com/en/support/23.html)

:::tip
Please use it after completely decompressing it, and do not run it directly in the compressed package.
:::

## 3. Firmware Burning

1. USB type-B ports 1P and 2P must be connected at the same time
2. Click the Open button
3. Select the `SS900_RED-LMS_xxxxx.skystar` firmware in the folder
4. Click the Update button
5. Complete

:::warning
- During the upgrade process, be sure to keep the USB connected. If the USB type-B is disconnected during the upgrade process, the main control PCBA may not be able to burn the firmware again.
- If it prompts that the burning fails, please burn again.
:::

## 4. Usage Guidelines

IIDXOLLER Options provides powerful parameters that can be customized according to your preferences. It can already adapt to most IIDX games under full default settings.

### 4.1 Software Interface

![Software Interface Overview](/img/docs/iidxoller-options/en/EN-IIDXOLLER-Options-guide-10-Outline.png)

| Area | Function |
|------|----------|
| **A** | Mode switch, sleep mode, language |
| **B** | Global function settings |
| **C** | Preview Window |
| **D** | Firmware preview, firmware burning |
| **E** | Mode Settings |
| **F** | Turntable weight (damping) setting |

### 4.2 Mode Switch, Sleep Mode, Language

![Mode Switch](/img/docs/iidxoller-options/en/EN-IIDXOLLER-Options-guide-20-A-title.png)

| Item | Description |
|------|-------------|
| **A1** | Switch mode button, select the mode in A2 and click the button to take effect |
| **A2** | Mode List |
| **A3** | Displays whether 1P is connected. If not, it will be gray |
| **A4** | Displays whether 2P is connected. If not, it will be gray |
| **A5** | Ignore the Windows scaling function. If 125%, 150%, or 200% is set on Windows, you can force it to display at 100% |
| **A6** | Sleep function: After 1-10 minutes, RED-LMS will turn off all lights. Press any button or turn the turntable to restore the lights |
| **A7** | Select the language you are used to. The `languagepack.xml` file can be modified at will to add the language you are used to |

### 4.3 Global Function Settings

#### 4.3.1 Global - Button Settings

![Button Settings](/img/docs/iidxoller-options/en/EN-IIDXOLLER-Options-guide-30-B-button.png)

| Item | Description |
|------|-------------|
| **B1** | The time it takes to process jitter when releasing a microswitch. The default value of 3ms is recommended. If you experience multiple reactions when using a VX-01-1C22 or VX-01-1C23 microswitch, increasing this value may partially improve the situation |
| **B2** | The time it takes to process jitter when a microswitch is pressed. The default value of 10ms is recommended. If you experience multiple responses when using a VX-01-1C22 or VX-01-1C23 microswitch, increasing this value may partially improve the situation |
| **B3** | The time it takes for the button light to turn off when the button is released. Usually it is recommended to be between 0-200ms |
| **B4** | Restore the factory settings of the buttons |

:::tip
- B1+B2＜50ms. This is an estimated value and is related to the maximum frequency of a single key press. Usually, the speed of a single key press is less than 20 times per second.
- For multiple reactions that occur with VX-01-1C22 or VX-01-1C23, increasing the B1+B2 time may alleviate some of the symptoms. If multiple reactions persist, it is recommended that the microswitch be replaced promptly.
:::

#### 4.3.2 Global - Turntable Settings

It looks a bit complicated, but in fact, it is usually necessary to adjust B7 and B8.

![Turntable Settings](/img/docs/iidxoller-options/en/EN-IIDXOLLER-Options-guide-31-B-TT.png)

| Item | Description |
|------|-------------|
| **B5** | The time interval between turntable reversals. Only on the EZ2ON, the turntable is set to 2 keys. It needs to be set to 8ms or higher. Otherwise, input loss may occur at the EZ2ON's high-speed turntable. The recommended default value is 0ms |
| **B6** | The recommended value is 20-100ms. The smaller the value, the faster the speed is required to trigger the turntable. The larger the value, the slower the speed is. The recommended default value is 100ms |
| **B7** | It can be understood as sensitivity. The smaller the value, the higher the sensitivity. The value represents the angle that the turntable needs to rotate to output the value. The recommended default value is 6 (according to our tests, we think 6 is closer to the arcade effect). You can make fine adjustments based on your own physical sensations. For players of high-difficulty turntable songs, you can set it to 2 |
| **B8** | It can be understood as the sensitivity of the turntable reversal. The smaller the value, the higher the sensitivity. The value represents the angle that the turntable needs to rotate to reverse the output value. The recommended default value is 4 (according to our tests, we think 6 is closer to the arcade effect). You can make fine adjustments based on your own physical sensations. For players of high-difficulty turntable songs, you can set it to 2 |
| **B9** | When using 1:2, a slower turntable speed can trigger fast scrolling of the song selection menu. When using 1:4, you need to use a higher speed to trigger the fast scrolling. The recommended default value is 1:4 (according to our tests, 1:4 is closer to the arcade effect) |
| **B10** | The time when the turntable damping is triggered. If the value is small, there will be no damping effect when turning the turntable slowly. At critical speeds, a jagged turntable feel will appear. The recommended default value is 40ms |
| **B11** | The current damping level of the turntable. The specific value of damping level uses the value settings of the F zone |
| **B12** | It represents the angle at which the turntable must be rotated before a damping effect occurs. The larger the value, the greater the angle required. You can try 2~16 to see how it feels |
| **B13** | Restore the turntable settings to factory defaults |

:::tip
- In EZ2ON, it is recommended to use keyboard mode or DS4 mode. In this mode, you can set the turntable reverse time interval to 8ms without using global parameters.
- If B6=10ms and the turntable damping is set relatively high, multiple outputs in the same direction can be achieved. The side effect is that the turntable will not respond when rotating slowly.
:::

#### 4.3.3 Global - Lighting Settings

![Lighting Settings](/img/docs/iidxoller-options/en/EN-IIDXOLLER-Options-guide-32-B-Light.png)

| Item | Description |
|------|-------------|
| **B14** | Set the button lighting brightness |
| **B15** | Set the turntable light brightness |
| **B16, B17** | Select the turntable lighting effect |
| **B18, B19** | Click C1 or C2 to set the corresponding turntable light color. Cannot be set in rainbow color mode |
| **B20** | Restore lighting settings to factory defaults |

### 4.4 Preview Window

![Preview Window](/img/docs/iidxoller-options/en/EN-IIDXOLLER-Options-guide-40-C-preivew.png)

| Item | Description |
|------|-------------|
| **C1, C2** | Displays the voltage currently provided by the PD power supply. 20V and 15V are the recommended operating voltages; 12V can be used for a long time; 9V can work, but it is not recommended for long time use; At 5V, electromagnetic damping does not work; 0V, PD power supply not plugged in |
| **C3, C4** | The original value of the turntable data does not participate in the actual output |
| **C5** | Displays the currently pressed keys |
| **C6** | Switch the physical locations of 1P and 2P. It is not recommended to click this button unless the main control PCBA needs to be replaced |

:::tip
- According to our experience, Anker's 140W PD power supply (with 3 Type-C interfaces and 1 Type-A interface) can provide 20V voltage at the same time when 2 Type-C cables are plugged in at the same time.
- It is recommended to use one 140W PD power supply; or two 45W PD power supplies.
:::

### 4.5 Firmware

![Firmware](/img/docs/iidxoller-options/en/EN-IIDXOLLER-Options-guide-50-D-firmware.png)

| Item | Description |
|------|-------------|
| **D1** | Display the current hardware version and firmware version |
| **D2** | Click to burn the firmware |
| **D3** | Click to open the window and select the firmware you want to burn |
| **D4** | Restore all parameters to factory settings (will not affect the life of the product) |

:::warning
Do not disconnect the USB type-B port during the firmware burning process. Otherwise, the motherboard PCBA may be damaged beyond repair.
:::

### 4.6 Modes

#### 4.6.1 PS2 and BLE Mode

To use it on PlayStation2, you need to switch to this mode and use it with BE2PS.

To use it with beatmania IIDX ULTIMATE MOBILE, you need to switch to this mode and use it with BE2BT.

![PS2 and BLE Mode](/img/docs/iidxoller-options/en/EN-IIDXOLLER-Options-guide-60-E-PS2.png)

| Item | Description |
|------|-------------|
| **E1, E2** | Displays the absolute value of the current 1P and 2P turntable output X axis |
| **E3, E4** | 1P and 2P turntables simulate in-game output |
| **E5** | Independently set the parameters of 1P and 2P in this mode |
| **E6** | Check to use the global settings; if unchecked, the global settings will be ignored and the parameters set in this mode will be used |
| **E7** | Set common parameters for 1P and 2P |
| **E8** | Restore the current mode to default values |

#### 4.6.2 EAC2dx and HID Mode

![EAC2dx and HID Mode](/img/docs/iidxoller-options/en/EN-IIDXOLLER-Options-guide-61-E-EAC.png)

| Item | Description |
|------|-------------|
| **E9** | FN1, FN2 can be freely mapped to any keyboard value |
| **E10, E14** | Specify 1P turntable and 2P turntable output X-axis or Y-axis |
| **E11, E15** | X-axis, Y-axis forward or reverse |
| **E12, E16** | Display the current X-axis and Y-axis values in real time |
| **E13, E17** | Simulate the state of Turntable output in the game |
| **E18** | Independently set the parameters of 1P and 2P in this mode |
| **E19** | Check to use the global settings; if unchecked, the global settings will be ignored and the parameters set in this mode will be used |
| **E20** | Set common parameters for 1P and 2P |
| **E21** | If checked, the damping data from spiceXXX will be automatically applied to the values of LEVEL1-LEVEL10. Unchecked, the current LEVEL specified in IIDXOLLER Options will be used |
| **E22** | If checked, the button will receive the spiceXXX downstream button light data. Unchecked, the button will light up when pressed |
| **E23** | Check this to receive the downstream turntable light data from spiceXXX (only single color, if you want to use the ring light effect and color specified by IIDXOLLER Options, please do not check this) |
| **E24** | When performing Double Play on INFINITAS, select E1 or E4 as the Start button according to your preference |
| **E25** | Restore the current mode to default values |

#### 4.6.3 LR2 Mode

The turntable output is the key value, and is specially optimized for LR2 in this mode.

![LR2 Mode](/img/docs/iidxoller-options/en/EN-IIDXOLLER-Options-guide-62-E-LR2.png)

| Item | Description |
|------|-------------|
| **E26** | FN1, FN2 can be freely mapped to any keyboard value |
| **E27, E28** | Simulate the state of Turntable output in LR2 |
| **E29** | Independently set the parameters of 1P and 2P in this mode |
| **E30** | Check to use the global settings; if unchecked, the global settings will be ignored and the parameters set in this mode will be used |
| **E31** | Set common parameters for 1P and 2P |
| **E32** | Check this, press E1 and turn the 1P turntable to adjust the LaneCover of 1P |
| **E33** | Check this, press E2 and turn the 1P turntable to adjust the 1P LIFT |
| **E34** | Check this, press E4 and turn the 2P turntable to adjust the 2P LIFT |
| **E35** | Restore the current mode to default values |

#### 4.6.4 beatoraja Mode

In this mode, the turntable can output key values or Axis.

![beatoraja Mode](/img/docs/iidxoller-options/en/EN-IIDXOLLER-Options-guide-63-E-beatoraja.png)

| Item | Description |
|------|-------------|
| **E36** | FN1, FN2 can be freely mapped to any keyboard value |
| **E37, E43** | Turntable output as analog |
| **E38, E44** | Turntable output as two different key values |
| **E39, E45** | Select Turntable as X-axis or Y-axis |
| **E40, E46** | The value of Axis is increasing or decreasing |
| **E41, E47** | Display the current X-axis and Y-axis values in real time |
| **E42, E48** | Simulate the state of turntable output in beatoraja |
| **E49** | Independently set the parameters of 1P and 2P in this mode |
| **E50** | Check to use the global settings; if unchecked, the global settings will be ignored and the parameters set in this mode will be used |
| **E51** | Set common parameters for 1P and 2P |
| **E52** | Restore the current mode to default values |

#### 4.6.5 Keyboard & Mouse Mode

![Keyboard & Mouse Mode](/img/docs/iidxoller-options/en/EN-IIDXOLLER-Options-guide-64-E-keyboard.png)

| Item | Description |
|------|-------------|
| **E53** | All buttons can be customized |
| **E54** | Use the mouse to click the button and press the keyboard key to complete the key value customization |
| **E55** | Clear the currently bound key value |
| **E56, E62** | Turntable output as mouse |
| **E57, E63** | Turntable output as keyboard value. Clockwise and counterclockwise can map the same keyboard value |
| **E58, E64** | Select turntable as X-axis or Y-axis |
| **E59, E65** | The value of Axis is increasing or decreasing |
| **E60, E66** | Preview the increase and decrease of the current Turntable value |
| **E61, E67** | Simulate the state of turntable output in the game |
| **E68** | Independently set the parameters of 1P and 2P in this mode |
| **E69** | Check to use the global settings; if unchecked, the global settings will be ignored and the parameters set in this mode will be used |
| **E70** | Set common parameters for 1P and 2P |
| **E71** | Restore the current mode to default values |

:::tip
For E57 and E63, if they are mapped to the same key value, it is recommended to increase the turntable reverse interval to 8ms; if the interval is too short, some software may not be able to recognize it.
:::

#### 4.6.6 DS4 Controller Mode

The simulated output is a DS4 controller, which can be correctly recognized on Steam in this mode.

![DS4 Controller Mode](/img/docs/iidxoller-options/en/EN-IIDXOLLER-Options-guide-65-E-Steam.png)

| Item | Description |
|------|-------------|
| **E72** | Custom key value, which can be set to any key value in DS4 |
| **E73** | Select the key value from the drop-down menu and it will take effect immediately |
| **E74, E80** | Turntable output as Axis |
| **E75, E81** | Turntable output as a key value, which can be mapped to two identical key values or different key values |
| **E76, E82** | Select the corresponding Axis for Turntable |
| **E77, E83** | The value of Axis is increasing or decreasing |
| **E78, E84** | The value of the Axis currently output by Turntable |
| **E79, E85** | Simulate the state of turntable output in the game |
| **E86** | Independently set the parameters of 1P and 2P in this mode |
| **E87** | Check to use the global settings; if unchecked, the global settings will be ignored and the parameters set in this mode will be used |
| **E88** | Set common parameters for 1P and 2P |
| **E89** | Restore the current mode to default values |

:::tip
- For E75 and E81, if they are mapped to the same key value, it is recommended to increase the turntable reverse interval to 8ms; if the interval is too short, some software may not be able to recognize it.
- If E76 or E82 is mapped to Axis, it will not be possible to map it to Axis when mapping buttons.
:::

#### 4.6.7 NS Mode

This mode will be added in the future.

### 4.7 Turntable Weight (Damping) Setting

The turntable weight (damping) is a global setting. You can enter any value from 0-100 based on your preference.

![Turntable Weight Setting](/img/docs/iidxoller-options/en/EN-IIDXOLLER-Options-guide-70-F-turntable-weight.png)

| Item | Description |
|------|-------------|
| **F1** | Damping digital input box, the larger the value, the greater the damping |
| **F2** | Click the button to save the current value; or press Enter to save the current value |
| **F3** | Restore factory default values |

:::tip
- If you want to use a constant damping value, you can set LEVEL1~LEVEL10 to the same value.
- If you only want [damping value] and [no damping value], you can set LEVEL1~LEVEL5 to zero and LEVEL6~LEVEL10 to the same value.
- You can set it up as you like.
:::
