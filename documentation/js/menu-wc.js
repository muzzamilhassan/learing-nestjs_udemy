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
                    <a href="index.html" data-type="index-link">nestjs_start_udemy documentation</a>
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
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-dd80f80be86d1ceecc3fb882eef8230ac8f20dc291b6972a5df0e64c812dd92981f77e0bb58120bab8a8a4b94781a50a0918bd458dfe38ef4a460ec28a77019c"' : 'data-bs-target="#xs-controllers-links-module-AppModule-dd80f80be86d1ceecc3fb882eef8230ac8f20dc291b6972a5df0e64c812dd92981f77e0bb58120bab8a8a4b94781a50a0918bd458dfe38ef4a460ec28a77019c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-dd80f80be86d1ceecc3fb882eef8230ac8f20dc291b6972a5df0e64c812dd92981f77e0bb58120bab8a8a4b94781a50a0918bd458dfe38ef4a460ec28a77019c"' :
                                            'id="xs-controllers-links-module-AppModule-dd80f80be86d1ceecc3fb882eef8230ac8f20dc291b6972a5df0e64c812dd92981f77e0bb58120bab8a8a4b94781a50a0918bd458dfe38ef4a460ec28a77019c"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-dd80f80be86d1ceecc3fb882eef8230ac8f20dc291b6972a5df0e64c812dd92981f77e0bb58120bab8a8a4b94781a50a0918bd458dfe38ef4a460ec28a77019c"' : 'data-bs-target="#xs-injectables-links-module-AppModule-dd80f80be86d1ceecc3fb882eef8230ac8f20dc291b6972a5df0e64c812dd92981f77e0bb58120bab8a8a4b94781a50a0918bd458dfe38ef4a460ec28a77019c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-dd80f80be86d1ceecc3fb882eef8230ac8f20dc291b6972a5df0e64c812dd92981f77e0bb58120bab8a8a4b94781a50a0918bd458dfe38ef4a460ec28a77019c"' :
                                        'id="xs-injectables-links-module-AppModule-dd80f80be86d1ceecc3fb882eef8230ac8f20dc291b6972a5df0e64c812dd92981f77e0bb58120bab8a8a4b94781a50a0918bd458dfe38ef4a460ec28a77019c"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-f23c94201706ab9a06d0ba4f683431b122446f8744b46f20d3367bece3278bc7e71efb40b198669495ba8abd0e3bc04e415f5add1c2e338fc8c862cec76b05f3"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-f23c94201706ab9a06d0ba4f683431b122446f8744b46f20d3367bece3278bc7e71efb40b198669495ba8abd0e3bc04e415f5add1c2e338fc8c862cec76b05f3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-f23c94201706ab9a06d0ba4f683431b122446f8744b46f20d3367bece3278bc7e71efb40b198669495ba8abd0e3bc04e415f5add1c2e338fc8c862cec76b05f3"' :
                                            'id="xs-controllers-links-module-PostsModule-f23c94201706ab9a06d0ba4f683431b122446f8744b46f20d3367bece3278bc7e71efb40b198669495ba8abd0e3bc04e415f5add1c2e338fc8c862cec76b05f3"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-f23c94201706ab9a06d0ba4f683431b122446f8744b46f20d3367bece3278bc7e71efb40b198669495ba8abd0e3bc04e415f5add1c2e338fc8c862cec76b05f3"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-f23c94201706ab9a06d0ba4f683431b122446f8744b46f20d3367bece3278bc7e71efb40b198669495ba8abd0e3bc04e415f5add1c2e338fc8c862cec76b05f3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-f23c94201706ab9a06d0ba4f683431b122446f8744b46f20d3367bece3278bc7e71efb40b198669495ba8abd0e3bc04e415f5add1c2e338fc8c862cec76b05f3"' :
                                        'id="xs-injectables-links-module-PostsModule-f23c94201706ab9a06d0ba4f683431b122446f8744b46f20d3367bece3278bc7e71efb40b198669495ba8abd0e3bc04e415f5add1c2e338fc8c862cec76b05f3"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-8c6efcf4eb6ecebda592f0a49b98ca5f244a2d8bb26363d6f58a50e372fdfa57eca0e2e58208af0060874afbdd17bf4683334f11a4015f57e2cc3d9478009d77"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-8c6efcf4eb6ecebda592f0a49b98ca5f244a2d8bb26363d6f58a50e372fdfa57eca0e2e58208af0060874afbdd17bf4683334f11a4015f57e2cc3d9478009d77"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-8c6efcf4eb6ecebda592f0a49b98ca5f244a2d8bb26363d6f58a50e372fdfa57eca0e2e58208af0060874afbdd17bf4683334f11a4015f57e2cc3d9478009d77"' :
                                            'id="xs-controllers-links-module-UsersModule-8c6efcf4eb6ecebda592f0a49b98ca5f244a2d8bb26363d6f58a50e372fdfa57eca0e2e58208af0060874afbdd17bf4683334f11a4015f57e2cc3d9478009d77"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-8c6efcf4eb6ecebda592f0a49b98ca5f244a2d8bb26363d6f58a50e372fdfa57eca0e2e58208af0060874afbdd17bf4683334f11a4015f57e2cc3d9478009d77"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-8c6efcf4eb6ecebda592f0a49b98ca5f244a2d8bb26363d6f58a50e372fdfa57eca0e2e58208af0060874afbdd17bf4683334f11a4015f57e2cc3d9478009d77"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-8c6efcf4eb6ecebda592f0a49b98ca5f244a2d8bb26363d6f58a50e372fdfa57eca0e2e58208af0060874afbdd17bf4683334f11a4015f57e2cc3d9478009d77"' :
                                        'id="xs-injectables-links-module-UsersModule-8c6efcf4eb6ecebda592f0a49b98ca5f244a2d8bb26363d6f58a50e372fdfa57eca0e2e58208af0060874afbdd17bf4683334f11a4015f57e2cc3d9478009d77"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserParamsDto.html" data-type="entity-link" >GetUserParamsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});