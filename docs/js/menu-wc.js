'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mscharts-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-3f6a77f9f26b6bdd9b50ad505af17830"' : 'data-target="#xs-components-links-module-AppModule-3f6a77f9f26b6bdd9b50ad505af17830"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3f6a77f9f26b6bdd9b50ad505af17830"' :
                                            'id="xs-components-links-module-AppModule-3f6a77f9f26b6bdd9b50ad505af17830"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BasicComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BasicComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BrushComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BrushComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-3f6a77f9f26b6bdd9b50ad505af17830"' : 'data-target="#xs-pipes-links-module-AppModule-3f6a77f9f26b6bdd9b50ad505af17830"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-3f6a77f9f26b6bdd9b50ad505af17830"' :
                                            'id="xs-pipes-links-module-AppModule-3f6a77f9f26b6bdd9b50ad505af17830"' }>
                                            <li class="link">
                                                <a href="pipes/SeriesPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SeriesPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NgMschartModule.html" data-type="entity-link">NgMschartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NgMschartModule-dfecf3e94493e86d686e05f9280dcfd1"' : 'data-target="#xs-components-links-module-NgMschartModule-dfecf3e94493e86d686e05f9280dcfd1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NgMschartModule-dfecf3e94493e86d686e05f9280dcfd1"' :
                                            'id="xs-components-links-module-NgMschartModule-dfecf3e94493e86d686e05f9280dcfd1"' }>
                                            <li class="link">
                                                <a href="components/NgMschartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgMschartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/NgMschartService.html" data-type="entity-link">NgMschartService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AnnotationLabel.html" data-type="entity-link">AnnotationLabel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AnnotationStyle.html" data-type="entity-link">AnnotationStyle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSAnnotations.html" data-type="entity-link">MSAnnotations</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSChart.html" data-type="entity-link">MSChart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSDataLabels.html" data-type="entity-link">MSDataLabels</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSDiscretePoint.html" data-type="entity-link">MSDiscretePoint</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSFill.html" data-type="entity-link">MSFill</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSGrid.html" data-type="entity-link">MSGrid</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSLegend.html" data-type="entity-link">MSLegend</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSLocale.html" data-type="entity-link">MSLocale</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSMarkers.html" data-type="entity-link">MSMarkers</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSNoData.html" data-type="entity-link">MSNoData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSOptions.html" data-type="entity-link">MSOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSPlotOptions.html" data-type="entity-link">MSPlotOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSResponsive.html" data-type="entity-link">MSResponsive</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSStates.html" data-type="entity-link">MSStates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSStroke.html" data-type="entity-link">MSStroke</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSTheme.html" data-type="entity-link">MSTheme</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSTitleSubtitle.html" data-type="entity-link">MSTitleSubtitle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSTooltip.html" data-type="entity-link">MSTooltip</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSXAxis.html" data-type="entity-link">MSXAxis</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MSYAxis.html" data-type="entity-link">MSYAxis</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PointAnnotations.html" data-type="entity-link">PointAnnotations</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/XAxisAnnotations.html" data-type="entity-link">XAxisAnnotations</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/YAxisAnnotations.html" data-type="entity-link">YAxisAnnotations</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});