import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { message } from 'src/app/utils/header';
import { MetaDetails, MetaList } from 'src/app/utils/Seolist';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;
  newheader: boolean = false;
  currentHeading: string = message.Header;
  currentMessage: string = message.Message;
  currentScroll: string = message.Scroll;
  metaData: MetaDetails[] = [];
  description!: string
  keyword!: string
  title!: string

  constructor(private router: Router,
    private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {


    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.url) {
        const url = event.url;
        this.newheader = false;
        let metaURL = url.replace('/', '');
        this.metaData = MetaList.filter(p => p.metafor == metaURL);

        for (let meta of this.metaData) {
          this.keyword = Object.values(meta)[1];
          this.description = Object.values(meta)[2];
          this.title = Object.values(meta)[3];
        }

        if (url.toString().includes('index')) {
          this.newheader = true;
          this.currentScroll = message.Scroll
          this.currentHeading = message.Header
          this.currentMessage = message.Message
        }
        if (url.toString().includes('about-us')) {
          this.currentScroll = message.aboutScroll
          this.currentHeading = message.aboutHeader
          this.currentMessage = message.aboutMessage


        }
        if (url.toString().includes('services')) {
          this.currentScroll = message.serviceScroll
          this.currentHeading = message.serviceHeader
          this.currentMessage = message.serviceMessage
        }
        if (url.toString().includes('career')) {
          this.currentScroll = message.careerScroll
          this.currentHeading = message.careerHeader
          this.currentMessage = message.careerMessage
        }
        if (url.toString().includes('portfolio')) {
          this.currentScroll = message.portfolioScroll
          this.currentHeading = message.portfolioHeader
          this.currentMessage = message.portfolioMessage
        }
        if (url.toString().includes('team')) {
          this.currentScroll = message.teamScroll
          this.currentHeading = message.teamHeader
          this.currentMessage = message.teamMessage
        }
        if (url.toString().includes('clients')) {
          this.currentScroll = message.clientScroll
          this.currentHeading = message.clientHeader
          this.currentMessage = message.clientMessage
        }
        if (url.toString().includes('contact')) {
          this.currentScroll = message.contactScroll
          this.currentHeading = message.contactHeader
          this.currentMessage = message.contactMessage
        }
        if (url.toString().includes('web-development')) {
          this.currentScroll = message.serviceScroll
          this.currentHeading = message.WebDevHeader
          this.currentMessage = message.WebDevMessage
        }
        if (url.toString().includes('mobile-development')) {
          this.currentScroll = message.serviceScroll
          this.currentHeading = message.MobileDevHeader
          this.currentMessage = message.MobileDevMessage
        }
        if (url.toString().includes('cms-development')) {
          this.currentScroll = message.serviceScroll
          this.currentHeading = message.CMSDevHeader
          this.currentMessage = message.CMSDevMessage
        }
        if (url.toString().includes('software-development')) {
          this.currentScroll = message.serviceScroll
          this.currentHeading = message.SoftwareDevHeader
          this.currentMessage = message.SoftWareDevMessage
        }
        if (url.toString().includes('cloud-computing')) {
          this.currentScroll = message.serviceScroll
          this.currentHeading = message.CloudDevHeader
          this.currentMessage = message.CloudDevMessage
        }
        if (url.toString().includes('privacy-policy')) {
          this.currentScroll = message.privacyScroll
          this.currentHeading = message.privacyHeader
          this.currentMessage = message.privacyMessage
        }
        if (url.toString().includes('digital-marketing')) {
          this.currentScroll = message.serviceScroll
          this.currentHeading = message.DigitalMarketingHeader
          this.currentMessage = message.DigitalMarketingMessage
        }
        if (url.toString().includes('terms-and-conditions')) {
          this.currentScroll = message.termScroll
          this.currentHeading = message.termHeader
          this.currentMessage = message.termMessage
        }
        if (url.toString().includes('get-quotation')) {
          this.currentScroll = message.QuotationScroll
          this.currentHeading = message.QuotationHeader
          this.currentMessage = message.QuotationMessage
        }
        if (url.toString().includes('evergreen')) {
          this.currentScroll = message.portfolioScroll
          this.currentHeading = message.EvergreenHeader
          this.currentMessage = message.EvergreenMessage
        }
        if (url.toString().includes('style-house')) {
          this.currentScroll = message.portfolioScroll
          this.currentHeading = message.StyleHouseHeader
          this.currentMessage = message.StyleHouseMessage
        }
        if (url.toString().includes('sky-live')) {
          this.currentScroll = message.portfolioScroll
          this.currentHeading = message.skyLiveHeader
          this.currentMessage = message.skyLiveMessage
        }
        if (url.toString().includes('flyzer')) {
          this.currentScroll = message.portfolioScroll
          this.currentHeading = message.FlyzerHeader
          this.currentMessage = message.FlyzerMessage
        }
        if (url.toString().includes('tarot-read')) {
          this.currentScroll = message.portfolioScroll
          this.currentHeading = message.TarotReadHeader
          this.currentMessage = message.TarotReadMessage
        }
        if (url.toString().includes('tarot-teller')) {
          this.currentScroll = message.portfolioScroll
          this.currentHeading = message.TarotTellerTHeader
          this.currentMessage = message.TarotTellerMessage
        }
        if (url.toString().includes('free-horo')) {
          this.currentScroll = message.portfolioScroll
          this.currentHeading = message.FreeHoroHeader
          this.currentMessage = message.FreeHoroMessage
        }
        if (url.toString().includes('loanpemoney')) {
          this.currentScroll = message.portfolioScroll
          this.currentHeading = message.LoanHeader
          this.currentMessage = message.LoanMessage
        }
        if (url.toString().includes('paisarupee')) {
          this.currentScroll = message.portfolioScroll
          this.currentHeading = message.PaisaHeader
          this.currentMessage = message.PaisaMessage
        }
        if (url.toString().includes('dreamteam')) {
          this.currentScroll = message.portfolioScroll
          this.currentHeading = message.DreamHeader
          this.currentMessage = message.DreamMessage
        }
        if (url.toString().includes('cricteam')) {
          this.currentScroll = message.portfolioScroll
          this.currentHeading = message.CricHeader
          this.currentMessage = message.CricMessage
        }
        if (url.toString().includes('audit-assist')) {
          this.currentScroll = message.portfolioScroll
          this.currentHeading = message.AuditHeader
          this.currentMessage = message.AuditMessage
        }
        if (url.toString().includes('brandwings')) {
          this.currentScroll = message.portfolioScroll
          this.currentHeading = message.BrandWingsHeader
          this.currentMessage = message.BrandWingsMessage
        }
        if (url.toString().includes('book-my-place')) {
          this.currentScroll = message.portfolioScroll
          this.currentHeading = message.HallHeader
          this.currentMessage = message.HallMessage
        }
        if (url.toString().includes('ratiramchander')) {
          this.currentScroll = message.portfolioScroll
          this.currentHeading = message.RatiRamHeader
          this.currentMessage = message.RatiRamMessage
        }
        if (url.toString().includes('blogs')) {
          this.currentScroll = message.BlogScroll
          this.currentHeading = "Blog"
          this.currentMessage = message.BlogMessage
        }
        if (url.toString().includes('7-key-elements-of-successful-goal-achievement')) {
          this.currentScroll = message.BlogScroll
          this.currentHeading = "7 key elements of successful goal achievement"
          this.currentMessage = message.BlogInnerMessage
        }
        if (url.toString().includes('top-trending-it-technologies')) {
          this.currentScroll = message.BlogScroll
          this.currentHeading = "top trending it technologies"
          this.currentMessage = message.BlogInnerMessage
        }
        if (url.toString().includes('data-warehouse-and-its-concepts')) {
          this.currentScroll = message.BlogScroll
          this.currentHeading = "Data Warehouse and its concepts"
          this.currentMessage = message.BlogInnerMessage
        }
        if (url.toString().includes('angular-developer')) {
          this.currentScroll = message.careerScroll
          this.currentHeading = "Angular Developer"
          this.currentMessage = message.careerInnerMessage
        }
        if (url.toString().includes('android-developer')) {
          this.currentScroll = message.careerScroll
          this.currentHeading = "Android Developer"
          this.currentMessage = message.careerInnerMessage
        }
        if (url.toString().includes('ios-developer')) {
          this.currentScroll = message.careerScroll
          this.currentHeading = "ios Developer"
          this.currentMessage = message.careerInnerMessage
        }
        if (url.toString().includes('dot-net-developer')) {
          this.currentScroll = message.careerScroll
          this.currentHeading = "Dot Net Developer"
          this.currentMessage = message.careerInnerMessage
        }
        if (url.toString().includes('mean-stack-developer')) {
          this.currentScroll = message.careerScroll
          this.currentHeading = "Mean Stack Developer"
          this.currentMessage = message.careerInnerMessage
        }
        if (url.toString().includes('web-designer')) {
          this.currentScroll = message.careerScroll
          this.currentHeading = "Web Designer"
          this.currentMessage = message.careerInnerMessage
        }
      //Set Meta Data
        this.titleService.setTitle(this.title);

        this.metaTagService.updateTag(
          { name: 'keywords', content: this.keyword },
        );

        this.metaTagService.updateTag(
          { name: 'description', content: this.description },
        );
        //Set Meta dataa
      }

    })
  }

}
