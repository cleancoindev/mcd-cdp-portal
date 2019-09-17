import React from 'react';
import { Box, Grid, Text, Input, Card } from '@makerdao/ui-components-core';
import { TextBlock } from 'components/Typography';
import { prettifyNumber } from 'utils/ui';

import lang from 'languages';
import ScreenFooter from './ScreenFooter';
import ScreenHeader from './ScreenHeader';

const placeholder = 'test';

function DepositDaiForm({ handleInputChange, daiAvailable }) {
  const fields = [
    [
      lang.formatString(lang.cdp_create.deposit_form_field1_title, 'DAI'),
      lang.formatString(lang.cdp_create.deposit_form_field1_text, 'DAI'),
      <Input
        key="collinput"
        name="gemsToLock"
        after={placeholder}
        type="number"
        value={placeholder}
        onChange={handleInputChange}
        width={300}
        // errorMessage={
        //   userHasSufficientGemBalance || !cdpParams.gemsToLock
        //     ? null
        //     : lang.formatString(
        //         lang.cdp_create.insufficient_ilk_balance,
        //         selectedIlk.currency.symbol
        //       )
        // }
      />,
      <Box key="ba">
        <Text t="subheading">{lang.your_balance} </Text>
        <Text
          t="caption"
          display="inline-block"
          ml="s"
          color="darkLavender"
          onClick={() => {
            handleInputChange({
              target: {
                name: 'gemsToLock',
                value: placeholder
              }
            });
          }}
        >
          {prettifyNumber(placeholder)} {'dAi'}
        </Text>
      </Box>
    ],
    [
      lang.cdp_create.deposit_form_field3_title,
      lang.cdp_create.deposit_form_field3_text,
      <Input
        key="daiToDraw"
        name="daiToDraw"
        after="DAI"
        width="250px"
        type="number"
        // errorMessage={
        //   userCanDrawDaiAmount ? null : lang.cdp_create.draw_too_much_dai
        // }
        value={placeholder}
        onChange={handleInputChange}
      />,
      <Grid gridRowGap="xs" key="keytodrawinfo">
        <Box key="ba">
          <Text t="subheading">
            {lang.cdp_create.deposit_form_field3_after2}{' '}
          </Text>
          <Text
            display="inline-block"
            ml="s"
            t="caption"
            color="darkLavender"
            onClick={() => {
              handleInputChange({
                target: {
                  name: 'daiToDraw',
                  value: daiAvailable
                }
              });
            }}
          >
            {prettifyNumber(daiAvailable)} DAI
          </Text>
        </Box>
      </Grid>
    ]
  ];

  return (
    <Grid gridRowGap="l" maxWidth="100%">
      <Grid
        gridTemplateColumns="auto"
        gridRowGap="l"
        gridColumnGap="m"
        alignItems="center"
      >
        {fields.map(([title, text, input, renderAfter]) => {
          return (
            <Grid gridRowGap="s" key={title}>
              <Grid gridRowGap="xs">
                <TextBlock t="h5" lineHeight="normal">
                  {title}
                </TextBlock>
                <TextBlock t="body">{text}</TextBlock>
              </Grid>
              <Box py="2xs">{input}</Box>
              {renderAfter}
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

const DSRDepositCreate = ({ dispatch }) => {
  function handleInputChange({ target }) {
    if (parseFloat(target.value) < 0) return;
    dispatch({
      type: `form/set-${target.name}`,
      payload: { value: target.value }
    });
  }
  //todo
  const daiAvailable = '123';
  return (
    <Box
      maxWidth="1040px"
      css={`
        margin: 0 auto;
      `}
    >
      <ScreenHeader
        title={lang.formatString(lang.save.deposit_dai)}
        text={lang.save.deposit_dai_subheading}
      />
      <Grid
        gridTemplateColumns={{ s: 'minmax(0, 1fr)', l: '2fr 1fr' }}
        gridGap="m"
        my="l"
      >
        <Card px={{ s: 'm', m: 'xl' }} py={{ s: 'm', m: 'l' }}>
          <DepositDaiForm
            daiAvailable={daiAvailable}
            handleInputChange={handleInputChange}
          />
        </Card>
      </Grid>
      <ScreenFooter
        onNext={() => dispatch({ type: 'increment-step' })}
        onBack={() =>
          dispatch({
            type: 'decrement-step',
            payload: { by: 1 }
          })
        }
        //todo
        canProgress={true}
      />
    </Box>
  );
};
export default DSRDepositCreate;