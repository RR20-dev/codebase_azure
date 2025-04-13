#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { EksClusterStack } from '../lib/eks-cluster-stack';

const app = new cdk.App();
new EksClusterStack(app, 'EksClusterStack');

