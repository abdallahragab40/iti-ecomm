import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FusePerfectScrollbarDirective } from '@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { AcademyCourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'academy-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class AcademyCourseComponent
  implements OnInit, OnDestroy, AfterViewInit {
  animationDirection: 'left' | 'right' | 'none';
  courseStepContent: any = [
    {
      title: 'Introduction',
      content:
        '<h1>Step 1 - Introduction</h1>' +
        '<br>' +
        'This is an example step of the course. You can put anything in here from example codes to videos.' +
        '<br><br>' +
        'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
        'To install or upgrade the CLI run the following <b>npm</b> command:' +
        '<br><br>' +
        '<code>npm -g install @angular/cli</code>' +
        '<br><br>' +
        'To verify that the CLI has been installed correctly, open a console and run:' +
        '<br><br>' +
        '<code>ng version</code>' +
        '<br><br>' +
        '<h2>Install dependencies</h2>' +
        '<br>' +
        "To moderate the images we'll need a few Node.js packages:" +
        '<br><br>' +
        '<ul>' +
        '<li>' +
        'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
        '</li>' +
        '</ul>' +
        '<br>' +
        'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
        '<br><br>' +
        '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
        '<br><br>' +
        'This will install the three packages locally and add them as declared dependencies in your package.js file.',
    },
    {
      title: 'Get the sample code',
      content:
        '<h1>Step 2 - Get the sample code</h1>' +
        '<br>' +
        'This is an example step of the course. You can put anything in here from example codes to videos.' +
        '<br><br>' +
        'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
        'To install or upgrade the CLI run the following <b>npm</b> command:' +
        '<br><br>' +
        '<code>npm -g install @angular/cli</code>' +
        '<br><br>' +
        'To verify that the CLI has been installed correctly, open a console and run:' +
        '<br><br>' +
        '<code>ng version</code>' +
        '<br><br>' +
        '<h2>Install dependencies</h2>' +
        '<br>' +
        "To moderate the images we'll need a few Node.js packages:" +
        '<br><br>' +
        '<ul>' +
        '<li>' +
        'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
        '</li>' +
        '</ul>' +
        '<br>' +
        'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
        '<br><br>' +
        '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
        '<br><br>' +
        'This will install the three packages locally and add them as declared dependencies in your package.js file.',
    },
    {
      title: 'Create a Firebase project and Set up your app',
      content:
        '<h1>Step 3 - Create a Firebase project and Set up your app</h1>' +
        '<br>' +
        'This is an example step of the course. You can put anything in here from example codes to videos.' +
        '<br><br>' +
        'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
        'To install or upgrade the CLI run the following <b>npm</b> command:' +
        '<br><br>' +
        '<code>npm -g install @angular/cli</code>' +
        '<br><br>' +
        'To verify that the CLI has been installed correctly, open a console and run:' +
        '<br><br>' +
        '<code>ng version</code>' +
        '<br><br>' +
        '<h2>Install dependencies</h2>' +
        '<br>' +
        "To moderate the images we'll need a few Node.js packages:" +
        '<br><br>' +
        '<ul>' +
        '<li>' +
        'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
        '</li>' +
        '</ul>' +
        '<br>' +
        'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
        '<br><br>' +
        '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
        '<br><br>' +
        'This will install the three packages locally and add them as declared dependencies in your package.js file.',
    },
    {
      title: 'Install the Firebase Command Line Interface',
      content:
        '<h1>Step 4 - Install the Firebase Command Line Interface</h1>' +
        '<br>' +
        'This is an example step of the course. You can put anything in here from example codes to videos.' +
        '<br><br>' +
        'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
        'To install or upgrade the CLI run the following <b>npm</b> command:' +
        '<br><br>' +
        '<code>npm -g install @angular/cli</code>' +
        '<br><br>' +
        'To verify that the CLI has been installed correctly, open a console and run:' +
        '<br><br>' +
        '<code>ng version</code>' +
        '<br><br>' +
        '<h2>Install dependencies</h2>' +
        '<br>' +
        "To moderate the images we'll need a few Node.js packages:" +
        '<br><br>' +
        '<ul>' +
        '<li>' +
        'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
        '</li>' +
        '</ul>' +
        '<br>' +
        'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
        '<br><br>' +
        '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
        '<br><br>' +
        'This will install the three packages locally and add them as declared dependencies in your package.js file.',
    },
    {
      title: 'Deploy and run the web app',
      content:
        '<h1>Step 5 - Deploy and run the web app</h1>' +
        '<br>' +
        'This is an example step of the course. You can put anything in here from example codes to videos.' +
        '<br><br>' +
        'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
        'To install or upgrade the CLI run the following <b>npm</b> command:' +
        '<br><br>' +
        '<code>npm -g install @angular/cli</code>' +
        '<br><br>' +
        'To verify that the CLI has been installed correctly, open a console and run:' +
        '<br><br>' +
        '<code>ng version</code>' +
        '<br><br>' +
        '<h2>Install dependencies</h2>' +
        '<br>' +
        "To moderate the images we'll need a few Node.js packages:" +
        '<br><br>' +
        '<ul>' +
        '<li>' +
        'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
        '</li>' +
        '</ul>' +
        '<br>' +
        'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
        '<br><br>' +
        '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
        '<br><br>' +
        'This will install the three packages locally and add them as declared dependencies in your package.js file.',
    },
    {
      title: 'The Functions Directory',
      content:
        '<h1>Step 6 - The Functions Directory</h1>' +
        '<br>' +
        'This is an example step of the course. You can put anything in here from example codes to videos.' +
        '<br><br>' +
        'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
        'To install or upgrade the CLI run the following <b>npm</b> command:' +
        '<br><br>' +
        '<code>npm -g install @angular/cli</code>' +
        '<br><br>' +
        'To verify that the CLI has been installed correctly, open a console and run:' +
        '<br><br>' +
        '<code>ng version</code>' +
        '<br><br>' +
        '<h2>Install dependencies</h2>' +
        '<br>' +
        "To moderate the images we'll need a few Node.js packages:" +
        '<br><br>' +
        '<ul>' +
        '<li>' +
        'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
        '</li>' +
        '</ul>' +
        '<br>' +
        'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
        '<br><br>' +
        '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
        '<br><br>' +
        'This will install the three packages locally and add them as declared dependencies in your package.js file.',
    },
    {
      title: 'Import the Cloud Functions and Firebase Admin modules',
      content:
        '<h1>Step 7 - Import the Cloud Functions and Firebase Admin modules</h1>' +
        '<br>' +
        'This is an example step of the course. You can put anything in here from example codes to videos.' +
        '<br><br>' +
        'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
        'To install or upgrade the CLI run the following <b>npm</b> command:' +
        '<br><br>' +
        '<code>npm -g install @angular/cli</code>' +
        '<br><br>' +
        'To verify that the CLI has been installed correctly, open a console and run:' +
        '<br><br>' +
        '<code>ng version</code>' +
        '<br><br>' +
        '<h2>Install dependencies</h2>' +
        '<br>' +
        "To moderate the images we'll need a few Node.js packages:" +
        '<br><br>' +
        '<ul>' +
        '<li>' +
        'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
        '</li>' +
        '</ul>' +
        '<br>' +
        'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
        '<br><br>' +
        '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
        '<br><br>' +
        'This will install the three packages locally and add them as declared dependencies in your package.js file.',
    },
    {
      title: 'Welcome New Users',
      content:
        '<h1>Step 8 - Welcome New Users</h1>' +
        '<br>' +
        'This is an example step of the course. You can put anything in here from example codes to videos.' +
        '<br><br>' +
        'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
        'To install or upgrade the CLI run the following <b>npm</b> command:' +
        '<br><br>' +
        '<code>npm -g install @angular/cli</code>' +
        '<br><br>' +
        'To verify that the CLI has been installed correctly, open a console and run:' +
        '<br><br>' +
        '<code>ng version</code>' +
        '<br><br>' +
        '<h2>Install dependencies</h2>' +
        '<br>' +
        "To moderate the images we'll need a few Node.js packages:" +
        '<br><br>' +
        '<ul>' +
        '<li>' +
        'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
        '</li>' +
        '</ul>' +
        '<br>' +
        'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
        '<br><br>' +
        '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
        '<br><br>' +
        'This will install the three packages locally and add them as declared dependencies in your package.js file.',
    },
    {
      title: 'Images moderation',
      content:
        '<h1>Step 9 - Images moderation</h1>' +
        '<br>' +
        'This is an example step of the course. You can put anything in here from example codes to videos.' +
        '<br><br>' +
        'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
        'To install or upgrade the CLI run the following <b>npm</b> command:' +
        '<br><br>' +
        '<code>npm -g install @angular/cli</code>' +
        '<br><br>' +
        'To verify that the CLI has been installed correctly, open a console and run:' +
        '<br><br>' +
        '<code>ng version</code>' +
        '<br><br>' +
        '<h2>Install dependencies</h2>' +
        '<br>' +
        "To moderate the images we'll need a few Node.js packages:" +
        '<br><br>' +
        '<ul>' +
        '<li>' +
        'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
        '</li>' +
        '</ul>' +
        '<br>' +
        'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
        '<br><br>' +
        '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
        '<br><br>' +
        'This will install the three packages locally and add them as declared dependencies in your package.js file.',
    },
    {
      title: 'New Message Notifications',
      content:
        '<h1>Step 10 - New Message Notifications</h1>' +
        '<br>' +
        'This is an example step of the course. You can put anything in here from example codes to videos.' +
        '<br><br>' +
        'To install the CLI you need to have installed <b>npm</b> which typically comes with <b>NodeJS</b>.' +
        'To install or upgrade the CLI run the following <b>npm</b> command:' +
        '<br><br>' +
        '<code>npm -g install @angular/cli</code>' +
        '<br><br>' +
        'To verify that the CLI has been installed correctly, open a console and run:' +
        '<br><br>' +
        '<code>ng version</code>' +
        '<br><br>' +
        '<h2>Install dependencies</h2>' +
        '<br>' +
        "To moderate the images we'll need a few Node.js packages:" +
        '<br><br>' +
        '<ul>' +
        '<li>' +
        'The Google Cloud Vision Client Library for Node.js: @google-cloud/vision to run the image through the Cloud Vision API to detect inappropriate images.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'The Google Cloud Storage Client Library for Node.js: @google-cloud/storage to download and upload the images from Cloud Storage.' +
        '</li>' +
        '<br>' +
        '<li>' +
        'A Node.js library allowing us to run processes: child-process-promise to run ImageMagick since the ImageMagick command-line tool comes pre-installed on all Functions instances.' +
        '</li>' +
        '</ul>' +
        '<br>' +
        'To install these three packages into your Cloud Functions app, run the following npm install --save command. Make sure that you do this from the functions directory.' +
        '<br><br>' +
        '<code>npm install --save @google-cloud/vision @google-cloud/storage child-process-promise</code>' +
        '<br><br>' +
        'This will install the three packages locally and add them as declared dependencies in your package.js file.',
    },
    {
      title: 'Congratulations!',
      content:
        '<h1>Step 11 - Congratulations!</h1>' +
        '<br>' +
        "You've built a full-fidelity, offline-capable progressive web app by leveraging the power of reusable Web Components and Firebase. Why bother with a native app when you know how to do all that?!",
    },
  ];

  course: any = {
    totalSteps: 11,
    steps: this.courseStepContent,
  };

  currentStep: number;

  @ViewChildren(FusePerfectScrollbarDirective)
  fuseScrollbarDirectives: QueryList<FusePerfectScrollbarDirective>;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {AcademyCourseService} _academyCourseService
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {FuseSidebarService} _fuseSidebarService
   */
  constructor(
    private _academyCourseService: AcademyCourseService,
    private _changeDetectorRef: ChangeDetectorRef,
    private _fuseSidebarService: FuseSidebarService,
    private route: ActivatedRoute
  ) {
    // Set the defaults
    this.animationDirection = 'none';
    this.currentStep = 0;

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to courses
    this._academyCourseService.onCourseChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((course) => {
        console.log(course);
        this.course = { ...this.course, ...course };
      });
    this._academyCourseService.getCourse(
      this.route.snapshot.paramMap.get('courseId')
    );
  }

  /**
   * After view init
   */
  ngAfterViewInit(): void {
    // this.courseStepContent = this.fuseScrollbarDirectives.find(
    //   (fuseScrollbarDirective) => {
    //     return (
    //       fuseScrollbarDirective.elementRef.nativeElement.id ===
    //       'course-step-content'
    //     );
    //   }
    // );
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Go to step
   *
   * @param step
   */
  gotoStep(step): void {
    // Decide the animation direction
    this.animationDirection = this.currentStep < step ? 'left' : 'right';

    // Run change detection so the change
    // in the animation direction registered
    this._changeDetectorRef.detectChanges();

    // Set the current step
    this.currentStep = step;
  }

  /**
   * Go to next step
   */
  gotoNextStep(): void {
    if (this.currentStep === this.course.totalSteps - 1) {
      return;
    }

    // Set the animation direction
    this.animationDirection = 'left';

    // Run change detection so the change
    // in the animation direction registered
    this._changeDetectorRef.detectChanges();

    // Increase the current step
    this.currentStep++;
  }

  /**
   * Go to previous step
   */
  gotoPreviousStep(): void {
    if (this.currentStep === 0) {
      return;
    }

    // Set the animation direction
    this.animationDirection = 'right';

    // Run change detection so the change
    // in the animation direction registered
    this._changeDetectorRef.detectChanges();

    // Decrease the current step
    this.currentStep--;
  }

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._fuseSidebarService.getSidebar(name).toggleOpen();
  }
}
