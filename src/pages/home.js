import React from 'react';
import { HeaderContainer } from '../container/header';
import { Feature, OptForm } from '../components';
import { FaqsContainer } from '../container/faqs';
import { JumbotronContainer } from '../container/jumbotron';
import { FooterContainer } from '../container/footer';




export default function Home() {
    return  <>
                <HeaderContainer>

                    <Feature>

                        <Feature.Title>
                            Unlimited Films, TV programmes and more.
                        </Feature.Title>

                        <Feature.SubTitle>
                            Watch anywhere. Cancel at any time.
                        </Feature.SubTitle>

                        <OptForm>

                            <OptForm.Input placeholder="Email address" />

                            <OptForm.Break />

                            <OptForm.Button>
                                Try it now
                            </OptForm.Button>

                            <OptForm.Break />

                            <OptForm.Text>
                                Ready to watch? Enter your email to create or restart your membership
                            </OptForm.Text>

                        </OptForm>

                    </Feature>

                </HeaderContainer>

                <JumbotronContainer />
                <FaqsContainer />
                <FooterContainer />

            </>
}





