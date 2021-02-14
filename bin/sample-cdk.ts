#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';

const app = new cdk.App();
/*
 * デプロイしたいスタックを指定する
 * e.g. new BastionStack(app, 'bastion');
*/
