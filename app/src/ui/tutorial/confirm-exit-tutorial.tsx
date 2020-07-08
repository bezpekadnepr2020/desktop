import React from 'react'

import { DialogFooter, DialogContent, Dialog } from '../dialog'
import { OkCancelButtonGroup } from '../dialog/ok-cancel-button-group'

interface IConfirmExitTutorialProps {
  readonly onDismissed: () => void
  readonly onContinue: () => void
}

export class ConfirmExitTutorial extends React.Component<
  IConfirmExitTutorialProps,
  {}
> {
  public render() {
    return (
      <Dialog
        title={__DARWIN__ ? 'Exit Tutorial' : 'Exit tutorial'}
        onDismissed={this.props.onDismissed}
        onSubmit={this.props.onContinue}
        type="normal"
      >
        <DialogContent>
          <p>
            Are you sure you want to leave the tutorial? This will bring you
            back to the home screen.
          </p>
        </DialogContent>
        <DialogFooter>
          <OkCancelButtonGroup
            okButtonText={__DARWIN__ ? 'Exit Tutorial' : 'Exit tutorial'}
          />
        </DialogFooter>
      </Dialog>
    )
  }
}
