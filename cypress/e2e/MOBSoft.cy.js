describe('template spec', () => {
  beforeEach(() => {

    cy.visit('http://mobsoft.mx/')
    cy.viewport(1200, 1024)

  })

  it('logo validation', () => {
    cy.get('.site-logo__link').should('be.visible').contains('MOBSoft').wait(1000);

    });
   
  //MAIN BUTTONS
    it('HOME', () => {
      cy.get('#menu-item-45 > a').should('be.visible').click().wait(1000);

      cy.get('.site-logo__link').should('be.visible').contains('MOBSoft').wait(1000);

    });

    it('SERVICES', () => {
      cy.get('#menu-item-491 > a').should('be.visible').click().wait(1000);
    
      cy.get('.site-logo__link').should('be.visible').contains('MOBSoft').wait(1000);

    //TOP OF PAGE
      cy.get('.page-title').should('be.visible').contains('Services');

      
      cy.get('#menu-item-491 > a').should('be.visible').click().wait(1000);
    
      cy.get('.breadcrumbs__browse').should('be.visible').contains('You Are Here').click();
      cy.go(-1);
        cy.visit('http://mobsoft.mx/services/');

      cy.get('.breadcrumbs__item-link').should('be.visible').contains('Home').click();
      cy.go(-1);
        cy.visit('http://mobsoft.mx/services/');

      cy.get('.breadcrumbs__item-target').should('be.visible').contains('Services').click();
      cy.go(-1);
        cy.visit('http://mobsoft.mx/services/');


    //TEXT
      cy.get('.entry-content > :nth-child(1)').should('be.visible').contains('At Mobsoft, we’re more than just fun people. We’re also a team of expert game developers, artists, and consultants.');
      cy.get('.entry-content > :nth-child(2)').should('be.visible').contains('Think of us as guns-for-hire. When you don’t have the time or bandwidth for full-time employees, we parachute in and fix your problem or bring your project home on schedule.');
      cy.get('strong').should('be.visible').contains('MOBSoft covers a wide range of services at different stages of game development, whether you need creative, productive, advisory, or operational resources.');
      cy.get('.entry-content > :nth-child(4)').should('be.visible').contains('Here are some examples of what we can do, but please don’t let this list limit you. We build games from idea to finished and operating product, if that is what you want.');
       
      //SUBTITLE Early stage game
        cy.get('.entry-content > :nth-child(5)').should('be.visible').contains('Early stage game, pre-funding:');

        cy.get('.entry-content > :nth-child(6) > :nth-child(1)').should('be.visible').contains('Concept artwork');
        cy.get(':nth-child(6) > :nth-child(2)').should('be.visible').contains('Inspirational trailers/mood boards');
        cy.get(':nth-child(6) > :nth-child(3)').should('be.visible').contains('Rapid prototyping');
        cy.get(':nth-child(6) > :nth-child(4)').should('be.visible').contains('Gameplay loop concepts');
        cy.get(':nth-child(6) > :nth-child(5)').should('be.visible').contains('Stack advisory');
        cy.get(':nth-child(6) > :nth-child(6)').should('be.visible').contains('Early development/core framework setup')

      //SUBTITLE Game production
        cy.get('.entry-content > :nth-child(7)').should('be.visible').contains('Game Production:')

        cy.get(':nth-child(8) > :nth-child(1)').should('be.visible').contains('Specialized development and guns-for-hire')
        cy.get(':nth-child(8) > :nth-child(2)').should('be.visible').contains('Artwork, game graphics')
        cy.get(':nth-child(8) > :nth-child(3)').should('be.visible').contains('Team leads/production')
        cy.get(':nth-child(8) > :nth-child(4)').should('be.visible').contains('Technical/development support (3rd tier expert developers)')
        cy.get(':nth-child(8) > :nth-child(5)').should('be.visible').contains('Backend development')

      //SUBTITLE Game production
        cy.get('.entry-content > :nth-child(9)').should('be.visible').contains('Late-stage, Post-launch:');

        cy.get(':nth-child(10) > :nth-child(1)').should('be.visible').contains('Platform integration');
        cy.get(':nth-child(10) > :nth-child(2)').should('be.visible').contains('Monetization');
        cy.get(':nth-child(10) > :nth-child(3)').should('be.visible').contains('Technical publishing');
        cy.get(':nth-child(10) > :nth-child(4)').should('be.visible').contains('Operations setup/support');
        cy.get(':nth-child(10) > :nth-child(5)').should('be.visible').contains('Monitoring');
        cy.get(':nth-child(10) > :nth-child(6)').should('be.visible').contains('Update development');

        cy.get('.entry-content > :nth-child(11)').should('be.visible').contains('Discretion and privacy is essential to us and our clients. If you want to see examples of what we have done, reach out and we’ll arrange a demo.');
      
      //FOOTER
        cy.get('#footer-menu-items > .menu-item-type-custom > a').should('be.visible').contains('Home').click();
        cy.go(-1);
        cy.get('#footer-menu-items > .current-menu-item > a').should('be.visible').contains('Service').click();
        cy.go(-1);
        cy.get('#footer-menu-items > .menu-item-has-children > a').should('be.visible').contains('About').click();
        cy.go(-1);
        cy.get('#footer-menu-items > .menu-item-66 > a').should('be.visible').contains('Contact Us').click();
        cy.go(-1);

      //INFORMATION BLOCK
        cy.get('.site-info-block > .contact-block > .contact-block__inner > .contact-block__item > .contact-block__value-wrap > .contact-block__label').should('be.visible').contains('Email');
        cy.get('.site-info-block > .contact-block > .contact-block__inner > .contact-block__item > .contact-block__value-wrap > .contact-block__text').should('be.visible').contains('Hello@mobsoft.mx');
      
      //SCROLL BUTTOM
        cy.scrollTo('bottom').wait(200);
        cy.get('#toTop').click();
      });

    it('ABOUT', () => {
      cy.get('#menu-item-129 > [href="http://mobsoft.mx/about/"]').click().wait(1000);

      cy.get('.site-logo__link').should('be.visible').contains('MOBSoft').wait(1000);

    //TOP OF PAGE
      cy.get('.page-title').should('be.visible').contains('About');

      cy.visit('http://mobsoft.mx/about/');
      cy.get('.breadcrumbs__browse').should('be.visible').contains('You Are Here').click();

      cy.visit('http://mobsoft.mx/about/');
      cy.get('.breadcrumbs__item-link').should('be.visible').contains('Home').click();
  
      cy.visit('http://mobsoft.mx/about/');
      cy.get('.breadcrumbs__item-target').should('be.visible').contains('About').click();

      cy.visit('http://mobsoft.mx/about/');

    //SUBTITLE 
      cy.get('.jet-animated-text__before-text > :nth-child(1)').should('be.visible').contains('Let');
      cy.get('.jet-animated-text__before-text > :nth-child(2)').should('be.visible').contains('us');

      cy.get('.jet-animated-text__animated-text-item.active.visible').should('have.length', 1).and('contain.text', 'Design'); // Verifica que el texto del elemento sea "Design"

      cy.get('.jet-animated-text__animated-text-item:not(.active.visible)').should('have.length', 1).and('contain.text', 'Create');

      cy.get('.jet-animated-text__after-text > :nth-child(1)').should('be.visible').contains('your');
      cy.get('.jet-animated-text__after-text > :nth-child(2)').should('be.visible').contains('game');
    
      cy.get('.jet-headline__first > .jet-headline__label').should('be.visible').contains('Play');
      cy.get('.jet-headline__second > .jet-headline__label').should('be.visible').contains('With Us');
    
    //TEXT
      cy.get('.elementor-text-editor > :nth-child(1)').should('be.visible').contains('MOBSoft is a Mexico City based game development company. We can help you with:');

      cy.get('.elementor-text-editor > ul > :nth-child(1)').should('be.visible').contains('Prototype development');
      cy.get('.elementor-text-editor > ul > :nth-child(2)').should('be.visible').contains('Organization training games');
      cy.get('.elementor-text-editor > ul > :nth-child(3)').should('be.visible').contains('Idea evaluation');
      cy.get('.elementor-text-editor > ul > :nth-child(4)').should('be.visible').contains('Consultancy');

      cy.get('.elementor-text-editor > :nth-child(3)').should('be.visible').contains('Prototype Development');

      cy.get('.elementor-text-editor > :nth-child(4)').should('be.visible').contains('MOBSoft can help you rapidly develop prototypes for your game ideas. This is a vital and often overlooked aspect of game development – getting to a point where you can start exploring your ideas as a real game rather than just an idea.');
      cy.get('.elementor-text-editor > :nth-child(5)').should('be.visible').contains('A game prototype can help you sell your ideas to investors or other key stakeholders. Instead of just having a game design document, you can now show a working game to illustrate your ideas, for example if you plan on implementing game based organizational training.');

      cy.get('.elementor-text-editor > :nth-child(6)').should('be.visible').contains('Organization Training Games');

      cy.get('.elementor-text-editor > :nth-child(7)').should('be.visible').contains('Helping employees learn company practices and values can be a tedious and difficult task. Rather than having a boring document or classroom session, games can help employees adopt quicker and with more enthusiasm.');
      cy.get('.elementor-text-editor > :nth-child(8)').should('be.visible').contains('Organization specific games can also help retrain employees in new technology or changing processes. The feeling of accomplishment that comes from winning games can help the employees take pride in learning rather than seeing it as a burden.');

      cy.get('.elementor-text-editor > :nth-child(9)').should('be.visible').contains('Idea Evaluation');

      cy.get('.elementor-text-editor > :nth-child(10)').should('be.visible').contains('Bring us your ideas! After signing and giving you our verystrict non-disclosure agreement, we can help you evaluate both the business potential and ‘is it fun’ aspect of your plan. We can then propose plans or develop game design documents that you can then present to developers. And don’t worry, we won’t be offended if you choose another developer.');
      cy.get('.elementor-text-editor > :nth-child(11)').should('be.visible').contains('MOBSoft has experience with creating and evaluating games ideas that eventually lead to successful games, both in the private and public space. This includes both entertainment and serious games. Do you know exactly what first-person shooters need? Do you think a game can help you speed onboarding of new employees? We’ll help you determine what is needed and whether you should proceed.');

      cy.get('.elementor-text-editor > :nth-child(12)').should('be.visible').contains('Consultancy');

      cy.get('.elementor-text-editor > :nth-child(13)').should('be.visible').contains('Our focus is not just on entertainment but also on more serious aspects of games. We can help you understand how to get the most out of your investment, how to plan and run a game development project, and how to effectively accomplish your goals.');
      cy.get('.elementor-text-editor > :nth-child(14)').should('be.visible').contains('Talk to us! Play with us! We promise, we won’t bite!');

    //BUTTON
      cy.get('.jet-button__container > .jet-button__instance').as('button');

      cy.get('@button').find('.jet-button__state-normal > .jet-button__label').should('have.text', 'Get In Touch!');

      cy.get('@button').find('.jet-button__state-normal').should('have.css', 'color', 'rgb(127, 136, 148)');

      cy.get('@button').trigger('mouseover');

      cy.get('@button').find('.jet-button__state-hover > .jet-button__label').should('have.text', 'Go');



    //FOOTER
      cy.visit('http://mobsoft.mx/about/');
      cy.get('#footer-menu-items > .menu-item-type-custom > a').should('be.visible').contains('Home').click();
      cy.go(-1);
      cy.get('#footer-menu-items > .menu-item-491 > a').should('be.visible').contains('Service').click();
      cy.go(-1);
      cy.get('#footer-menu-items > .current-menu-item > a').should('be.visible').contains('About').click();
      cy.go(-1);
      cy.get('#footer-menu-items > .menu-item-66 > a').should('be.visible').contains('Contact Us').click();
      cy.go(-1);

    //INFORMATION BLOCK
      cy.visit('http://mobsoft.mx/about/');
      cy.get('.site-info-block > .contact-block > .contact-block__inner > .contact-block__item > .contact-block__value-wrap > .contact-block__label').should('be.visible').contains('Email');
      cy.get('.site-info-block > .contact-block > .contact-block__inner > .contact-block__item > .contact-block__value-wrap > .contact-block__text').should('be.visible').contains('Hello@mobsoft.mx');


    //SCROLL BUTTOM
      cy.visit('http://mobsoft.mx/about/');
      cy.scrollTo('bottom').wait(200);
      cy.get('#toTop').click();
      
    });

    it('CONTACT US', () => {

      cy.get('#menu-item-66 > a').should('be.visible').click().wait(1000);
    
      cy.get('.site-logo__link').should('be.visible').contains('MOBSoft').wait(1000);

    //TOP OF PAGE
      cy.get('.page-title').should('be.visible').contains('Contact Us');

      cy.visit('http://mobsoft.mx/contact/');
      cy.get('.breadcrumbs__browse').should('be.visible').contains('You Are Here').click();
    
      cy.visit('http://mobsoft.mx/contact/');
      cy.get('.breadcrumbs__item-link').should('be.visible').contains('Home').click();
      
      cy.visit('http://mobsoft.mx/contact/');
      cy.get('.breadcrumbs__item-target').should('be.visible').contains('Contact Us').click();
    
      cy.visit('http://mobsoft.mx/contact/');
   
    //TEXT
      cy.get('.entry-content > :nth-child(1)').should('be.visible').contains('You can reach us at hello@mobsoft.mx or fill in the form below.');

    //CHAT BOX
      cy.get('.grunion-field-name-wrap > .grunion-field-label').should('be.visible').contains('Name');
    
      cy.get('.grunion-field-name-wrap > .grunion-field-label > span').should('be.visible').contains('required');
    
          const name = 'Patricia Abigail Lara Díaz';

      cy.get('#g55-name').click().type(name).should('have.value', name);
    
      cy.get('.grunion-field-email-wrap > .grunion-field-label').should('be.visible').contains('Email');
    
      cy.get('.grunion-field-email-wrap > .grunion-field-label > span').should('be.visible').contains('required');
    
          const email = 'aby@mobsoft.mx';

      cy.get('#g55-email').click().type(email).should('have.value', email);
    
      cy.get('.grunion-field-textarea-wrap > .grunion-field-label').should('be.visible').contains('Message');
    
          const message = 'This is a test message describing needs requested to the company.';

      cy.get('#contact-form-comment-g55-message').click().type(message).should('have.value', message);
    
      cy.get('.pushbutton-wide').click();
    
    // MESSAGE SENT
      cy.get('.entry-content > :nth-child(1)').should('be.visible').contains('You can reach us at hello@mobsoft.mx or fill in the form below.');
      
      cy.get('h3').should('be.visible').contains('Message Sent');
      
      cy.get('h3 > a').should('be.visible').contains('go back');
    
      cy.get('.contact-form-submission > :nth-child(1)').should('be.visible').contains(`Name: ${name}`);
      cy.get('.contact-form-submission > :nth-child(2)').should('be.visible').contains(`Email: ${email}`);
      cy.get('.contact-form-submission > :nth-child(3)').should('be.visible').contains(`Message: ${message}`);

      cy.get('h3 > a').click();
   
    //FOOTER
      cy.visit('http://mobsoft.mx/contact/');
      cy.get('#footer-menu-items > .menu-item-type-custom > a').should('be.visible').contains('Home').click();
      cy.go(-1);
      cy.get('#footer-menu-items > .menu-item-491 > a').should('be.visible').contains('Service').click();
      cy.go(-1);
      cy.get('#footer-menu-items > .menu-item-has-children > a').should('be.visible').contains('About').click();
      cy.go(-1);
      cy.get('#footer-menu-items > .current-menu-item > a').should('be.visible').contains('Contact Us').click();
      cy.go(-1);

    //INFORMATION BLOCK
      cy.visit('http://mobsoft.mx/contact/');
      cy.get('.site-info-block > .contact-block > .contact-block__inner > .contact-block__item > .contact-block__value-wrap > .contact-block__label').should('be.visible').contains('Email');
      cy.get('.site-info-block > .contact-block > .contact-block__inner > .contact-block__item > .contact-block__value-wrap > .contact-block__text').should('be.visible').contains('Hello@mobsoft.mx');

    //SCROLL BUTTOM
      cy.viewport(800, 600);
      cy.visit('http://mobsoft.mx/contact/');
      cy.scrollTo('bottom').wait(200);
      cy.get('#toTop').click();

      cy.viewport(1200, 1024)

    });
  
})