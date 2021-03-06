---
title: Step flow
parentIdentifier: patterns
component: zui-step-flow
---

## What is a step flow?

A step flow is a series of pages designed to walk the user through a defined workflow with a specific end.

## When to use

Use step flows to focus the user on a single task and reduce the cognitive load of complex tasks in a single, related workflow.

#### Alternate considerations

- Use [expanders](/components/zui-expanders) to break long blocks of content into separate sections with independent workflows.
- Use [tabs](/components/zui-tabs) to break content into distinct workflows that can be completed independently, or to offer alternative views of the same information.

<!-- <a class="scroll-to-top u-semi-bold">Back to top</a> -->

<hr>

<!-- ###### External Links

* [Design specs](https://xd.adobe.com/spec/a470f91a-f0f7-4a18-475c-6557e480b3e7-d241/)
* <span class="u-semi-bold" href="" target="_blank">Live example (coming soon)</span>
* <span class="u-semi-bold" href="" target="_blank">ZUI toolkit (coming soon)</span>
* <span class="u-semi-bold" href="" target="_blank">GitLab repo (coming soon)</span> -->

### Pattern basics

<Grid>

<GridCol col="span-4">

##### Launching a step flow

Step flows may appear in a number of different places in our products, and may be launched from a number of different components (e.g., buttons, links, etc.).

##### Full-page overlay

To focus user attention, we recommend a full-page overlay that animates in and covers the entire screen, including the top bar and side navigation. For different size considerations, see [dialog](/components/zui-dialog).

##### Navigation

Basic navigation controls include "next" and "back" buttons in the lower right corner of the dialog, as well as an "exit" action in the upper right corner of the dialog.

##### Number of steps

While there's no fixed number, try to limit step flows to between 3 and 10 steps. Fewer than 3 can probably be combined onto a single screen, and more than 10 might better be served by breaking up the workflow differently (e.g., using tabs, multiple step flows, etc.).

[See basic step flow anatomy specs](https://xd.adobe.com/spec/a470f91a-f0f7-4a18-475c-6557e480b3e7-d241/screen/581f31c0-629a-4404-859c-211032f6610c/)

</GridCol>

<GridCol col="span-8">

![Basic step flow anatomy.](/images/components/step-flow/step-flow-anatomy.svg)

</GridCol>

</Grid>

<!-- <a class="scroll-to-top u-semi-bold">Back to top</a> -->

<hr>

### Context

<Grid>

<GridCol col="span-4">

##### Intro screen

- When possible and not redundant, it's a good idea to include an intro page.
- The intro should reiterate the basic scope and purpose of the step flow.
- If completing a step flow will become impossible based upon the user's answer to certain questions, it's a best practice to include those questions on this intro page. That way, the user doesn't enter a flow that's impossible to finish.

[See intro screen specs](https://xd.adobe.com/spec/a470f91a-f0f7-4a18-475c-6557e480b3e7-d241/screen/630107ae-33a0-4ee8-b6c4-157c50d42034/)

</GridCol>

<GridCol col="span-8">

![Intro screen of a step flow process.](/images/components/step-flow/step-flow-intro-screen.svg)

</GridCol>

<GridCol col="span-4">

##### Completion screen

- In order to signal the end of the step flow, include a completion screen, which validates that the action has been completed.
- The completion screen can be dismissed by a single action button, and should indicate where the user will land upon clicking it.

[See completion screen specs](https://xd.adobe.com/spec/a470f91a-f0f7-4a18-475c-6557e480b3e7-d241/screen/ae18feb7-90a5-4445-9e2b-35d414c824fa/)

</GridCol>

<GridCol col="span-8">

![Completion screen of a step flow process.](/images/components/step-flow/step-flow-completion-screen.svg)

</GridCol>

</Grid>

<!-- <a class="scroll-to-top u-semi-bold">Back to top</a> -->

<hr>

### Exiting and returning

- Ideally, a user would complete a step flow in a single, uninterrupted session. However, sometimes, the user may want or need to leave before completing the step flow.
  - Designers and developers should decide whether or not the progress of an incomplete flow will be saved if exiting before complete.
  - When the user clicks the exit button, a dialog will pop up to alert the user of the consequences of leaving (saving or not saving data) and asking for confirmation of the action.
- A deep link into a step flow should take the user to the intro screen or, if there is no intro, the first step of the flow.
- The action on the completion screen always saves the user's work.
- If returning to a saved step flow to edit or review information, you may want to include a text link that allows the user to skip straight to the end, or to the step flow's review page. This link would appear after reaching the end and returning to a previous step or exiting and returning.

<!-- <a class="scroll-to-top u-semi-bold">Back to top</a> -->

<hr>

### Step flow with a progress indicator

<Grid>

<GridCol col="span-4">

- Only use a progress indicator if you know exactly how many steps are in the process.
- Both horizontal and vertical progress indicators are available.

For more information about the component itself, see the [step progress indicator page](#).

</GridCol>

<GridCol col="span-8">

![Step flow with a horizontal progress indicator.](/images/components/step-flow/progress-indicator-horizontal.svg)

[See step flow with a horizontal progress indicator specs](https://xd.adobe.com/spec/a470f91a-f0f7-4a18-475c-6557e480b3e7-d241/screen/052b219a-3df1-462e-bd03-1c186af4e0a6/)

![Step flow with a vertical progress indicator.](/images/components/step-flow/progress-indicator-vertical.svg)

[See step flow with a vertical progress indicator specs](https://xd.adobe.com/spec/a470f91a-f0f7-4a18-475c-6557e480b3e7-d241/screen/6007b49b-4774-4895-9edb-ff6dadefd9bb/)

</GridCol>

</Grid>

<!-- <a class="scroll-to-top u-semi-bold">Back to top</a> -->

<hr>

### Step flow without a progress indicator

<Grid>

<GridCol col="span-4">

- Don't use a step progress indicator if a step flow allows for a user to pursue multiple paths, or if the user may be able to skip certain later steps based upon their work in earlier steps.
- If it's a longer step flow and the indicator would look too cluttered, omit the step flow indicator.

[See step flow without a progress indicator specs](https://xd.adobe.com/spec/a470f91a-f0f7-4a18-475c-6557e480b3e7-d241/screen/6844d752-1b8d-419e-b817-ada898a88250/)

</GridCol>

<GridCol col="span-8">

![Step flow without a progress indicator.](/images/components/step-flow/step-flow-without-progress-indicator-desktop.svg)

</GridCol>

</Grid>

<!-- <a class="scroll-to-top u-semi-bold">Back to top</a> -->

<hr>

### Mobile considerations

<Grid>

<GridCol col="span-4">
A mobile step flow resembles the desktop versions with a few notable differences:

- The progress indicator becomes slimmer and eliminates labels to save screen space; only a horizontal version of this step progress indicator is recommended.
- The exit action moves to the lower left corner of the screen.
- A sticky footer containing all navigation actions may be employed for easier, quick navigation.

[See mobile view with a progress indicator specs](https://xd.adobe.com/spec/a470f91a-f0f7-4a18-475c-6557e480b3e7-d241/screen/0583b568-d67b-4341-a024-8a0400ef8824/)

[See mobile view without a progress indicator specs](https://xd.adobe.com/spec/a470f91a-f0f7-4a18-475c-6557e480b3e7-d241/screen/78eec458-ee6c-457a-a413-9831140f84d9/)

</GridCol>

<GridCol col="span-4">

![Mobile view of the step flow with a progress indicator.](/images/components/step-flow/step-flow-with-progress-indicator-mobile.svg)

</GridCol>

<GridCol col="span-4">

![Mobiel view of the step flow without a progress indicator.](/images/components/step-flow/step-flow-without-progress-indicator-mobile.svg)

</GridCol>

</Grid>

<!-- <a class="scroll-to-top u-semi-bold">Back to top</a> -->
