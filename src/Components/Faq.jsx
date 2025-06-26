import React from 'react';

const Faq = () => {
    return (
        <div className='w-full py-6 px-3'>
                        <h2 className='font-bold text-2xl text-green-900'>Frequantly Asked Questions</h2>
            <span className='px-24 border-t-4 border-green-700'></span>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title font-semibold">How do I create an account?</div>
  <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">Is my information safe?</div>
  <div className="collapse-content text-sm">We are cautious about sharing personal information. Although we require access to your photo gallery, we never process any photos without your permission. Rest assured that we will NEVER share your information with anyone.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">How do I update my profile information?</div>
  <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">How to check if I am PlantiFy Premium or Free?</div>
  <div className="collapse-content text-sm">To check that, you could follow the step below: 1. Go to “My page” page; 2. Tap "Settings" icon in the upper right corner; 3. If you could see the 7 days free trial "Continue" at that page,it means that you are in the free mode.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">What privileges do PlantiFy Premium offer?</div>
  <div className="collapse-content text-sm">The Premium subscription includes: * Never kill a plant again * Robust plant database to learn more about your plants * Follow personalized plant care guides for every plant * Schedule care reminders for watering, repotting, and more</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">How to restore my Premium membership on a new device?</div>
  <div className="collapse-content text-sm">The first thing to do is to make sure that on your new device you are signed in to the same Account in App Store that you used to PlantParent Premium.If you have created a PlantParent account on your old device, you can simply log in with the same email account on your new device. Your subscription should be bound to your PlantParent account automatically. If you don't have a self-created PlantParent account and don't have your old device with you, please follow the instructions below: 1. On your new device, open PlantParent App and go into purchasing page (On the My Plants page, tap settings icon on the top right corner, and click "My Premium Service") 2. Click on 'Restore' on the upper left on that screen 3. A window will pop up once your subscription is restored successfully</div>
</div>
        </div>
    );
};

export default Faq;