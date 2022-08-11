import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import palette from '../../../../lib/styles/palette'
import {
  MobileItem,
  MobileItemTitleWrapper,
  MobileItemBody,
  MobileItemsProps,
} from './MobileItems'
