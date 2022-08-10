// import { div } from "@lingui/macro";
import { Connector } from "@web3-react/types";
// import { ButtonEmpty, ButtonPrimary } from "components/Button";
import styled from "styled-components/macro";
// import { ThemedText } from "theme";

import Loader from "../Loader";

const PendingSection = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap};
  align-items: center;
  justify-content: center;
  width: 100%;
  & > * {
    width: 100%;
  }
`;

const LoaderContainer = styled.div`
  margin: 16px 0;
  ${({ theme }) => theme.flexRowNoWrap};
  align-items: center;
  justify-content: center;
`;

const LoadingMessage = styled.div`
  ${({ theme }) => theme.flexRowNoWrap};
  align-items: center;
  justify-content: center;
  border-radius: 12px;

  & > * {
    padding: 1rem;
  }
`;

const ErrorGroup = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap};
  align-items: center;
  justify-content: flex-start;
`;

const LoadingWrapper = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap};
  align-items: center;
  justify-content: center;
`;

export default function PendingView({
  connector,
  error = false,
  tryActivation,
  openOptions,
}: {
  connector: Connector;
  error?: boolean;
  tryActivation: (connector: Connector) => void;
  openOptions: () => void;
}) {
  return (
    <PendingSection>
      <LoadingMessage>
        <LoadingWrapper>
          {error ? (
            <ErrorGroup>
              <div>
                <div>Error connecting</div>
              </div>
              <div>
                <div>
                  The connection attempt failed. Please click try again and
                  follow the steps to connect in your wallet.
                </div>
              </div>
              <button
                onClick={() => {
                  tryActivation(connector);
                }}
              >
                <div>Try Again</div>
              </button>
              <button onClick={openOptions}>
                <div>
                  <div>Back to wallet selection</div>
                </div>
              </button>
            </ErrorGroup>
          ) : (
            <>
              <div>
                <LoaderContainer>
                  <Loader stroke="currentColor" size="32px" />
                </LoaderContainer>
                <div>Connecting...</div>
              </div>
            </>
          )}
        </LoadingWrapper>
      </LoadingMessage>
    </PendingSection>
  );
}
